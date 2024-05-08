const Candidatures = require('../models/Candidature')
const Pelerins = require('../models/pelerin')
const Medecins = require('../models/Medecin')
const Admins = require('../models/sousAdmin')
const Commune = require('../models/Commune')
const Session = require('../models/Sessions');
const Wilaya=require('../models/wilaya')


const getCandidatsCountForWilaya = async (wilaya) => {
  try {
    const candidatsCount = await Candidature.countDocuments({ wilaya: wilaya.code });
    return candidatsCount;
  } catch (error) {
    console.error('Error fetching candidats count for wilaya:', error);
    throw new Error('Error fetching candidats count for wilaya');
  }
};

exports.getCounts = async(req, res)=>{
 try {
    const candidatureCount = await Candidatures.countDocuments();
    const pelerinCount = await Pelerins.countDocuments();
    const adminCount = await Admins.countDocuments();
    const medecinCount = await Medecins.countDocuments();

    const counts = {
        candidatures: candidatureCount,
        pelerins: pelerinCount,
        medecins: medecinCount,
        admins: adminCount
      };

    console.log("les counts des tables", counts)
    res.status(201).json(counts)
 } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
 }
}

exports.getCountsWilaya = async(req, res)=>{
  try {
     const wilayaName = req.params.name
     const lawilaya = await Wilaya.findOne({name:wilayaName})
     const nbPlaces = lawilaya.nb_places
     const candidatureCount = await Candidatures.find({wilaya: lawilaya.code}).countDocuments();
     const medecinCount = await Medecins.find({
      Wilaya:lawilaya._id
    }).countDocuments();
 
     const counts = {
         candidaturesCount: candidatureCount,
         medecinsCount: medecinCount,
         nbPlaces: nbPlaces
       };
 
     console.log("les counts des tables", counts)
     res.status(201).json(counts)
  } catch (error) {
     res.status(500).json({ error: 'Internal Server Error' });
  }
 }


exports.getFMCandCount = async(req, res)=>{
    try {
        const femaleCount = await Candidatures.countDocuments({genre: "أنثى"})
        const maleCount = await Candidatures.countDocuments({genre: "ذكر"})

        const FMcounts = {
            femaleCount,
            maleCount
        }
        console.log("les femmes candidatures: ", femaleCount)
        console.log("les males candidatures: ", maleCount)

        res.status(201).json(FMcounts)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


exports.getFMPelCount=async(req, res)=>{
    try {
        const pelerins = await Pelerins.find()


        let femaleCount = 0;
        let maleCount = 0;

        for (const pelerin of pelerins) {
            const candidature = await Candidatures.findOne({ _id: pelerin.Candidature });
            if (candidature) {
                if (candidature.genre === "أنثى" ) {//&& candidature.status === "is_elected"
                    femaleCount++;
                } else if (candidature.genre === "ذكر" ) {//&& candidature.status === "is_elected"
                    maleCount++;
                }
            }
        }

        const FMcounts = {
            femaleCount,
            maleCount
        }

        console.log("les femmes pelerins: ", femaleCount)
        console.log("les males pelerins: ", maleCount)

        res.status(201).json(FMcounts)
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


exports.getPelerinParAge=async(req,res)=>{
    try {
        // Execute the aggregation pipeline
        const result = await Pelerins.aggregate([
          {
            $lookup: {
              from: 'candidatures',
              localField: 'Candidature',
              foreignField: '_id',
              as: 'candidature'
            }
          },
          {
            $addFields: {
              age: {
                $cond: {
                  if: { $isArray: "$candidature" }, // Check if candidature array exists
                  then: {
                    $floor: {
                      $divide: [
                        { $subtract: [new Date(), { $arrayElemAt: ["$candidature.date_naissance", 0] }] },
                        31536000000 // Milliseconds in a year
                      ]
                    }
                  },
                  else: null // If candidature array doesn't exist, set age to null
                }
              }
            }
          },
          {
            $group: {
              _id: {
                $subtract: [
                  { $ifNull: ["$age", 0] }, // Handle null values for age
                  { $mod: [{ $ifNull: ["$age", 0] }, 10] } // Handle null values for age
                ]
              },
              count: { $sum: 1 }
            }
          },
          {
            $project: {
              _id: 0,
              ageRange: "$_id",
              count: 1
            }
          },
          {
            $sort: {
              ageRange: 1
            }
          }
        ]);
    
        // Send the result as JSON response
        console.log(result)
        res.json(result);
      } catch (error) {
        // If an error occurs, send an error response
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    //   "ageRange": 0 means the count of "Pelerins" with ages from 0 to 9 (inclusive).
    //   "ageRange": 10 means the count of "Pelerins" with ages from 10 to 19 (inclusive).
    //   "ageRange": 20 means the count of "Pelerins" with ages from 20 to 29 (inclusive).
    //   And so on.
    //   Therefore, "ageRange": 0 indicates the count of "Pelerins" aged from 0 to 9 years.
}


  exports.getCandidatsByAge = async (req, res) => {
    try {
      const result = await Candidatures.aggregate([
        {
          $addFields: {
            age: {
              $floor: {
                $divide: [
                  { $subtract: [new Date(), "$date_naissance"] },
                  31536000000 // Milliseconds in a year
                ]
              }
            }
          }
        },
        {
          $group: {
            _id: {
              $subtract: [
                { $ifNull: ["$age", 0] }, // Handle null values for age
                { $mod: [{ $ifNull: ["$age", 0] }, 10] } // Handle null values for age
              ]
            },
            count: { $sum: 1 }
          }
        },
        {
          $project: {
            _id: 0,
            ageRange: "$_id",
            count: 1
          }
        },
        {
          $sort: {
            ageRange: 1
          }
        }
      ]);
  
      // Send the result as JSON response
      res.json(result);
    } catch (error) {
      // If an error occurs, send an error response
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
    






exports.countPelerinsByYear=async(req,res) =>{
  try {
    const candidatures = await Candidatures.find({ status: 'is_elected' });

    // Create an object to store the count of candidatures by year
    const candidaturesByYear = {};
    
    // Iterate through the candidatures
    for (const candidature of candidatures) {
        // Find the associated session by id
        const session = await Session.findById(candidature.id_session);
    
        // If session is found, extract the year
        if (session) {
            const year = session.annee;
    
            // Increment the count for the year in the candidaturesByYear object
            if (candidaturesByYear[year]) {
                candidaturesByYear[year]++;
            } else {
                candidaturesByYear[year] = 1;
            }
        }
    }
    
    // Convert the candidaturesByYear object to an array of objects
    const candidaturesArray = Object.entries(candidaturesByYear).map(([year, count]) => ({ year, count }));
    res.json(candidaturesArray)
    


      
  } catch (error) {
      console.error('Error counting pelerins by year:', error);
      throw error;
  }
}


exports.getCountsWilaya = async(req, res)=>{
  try {
     const wilayaName = req.params.name
     const lawilaya = await Wilaya.findOne({name:wilayaName})
     const nbPlaces = lawilaya.nb_places
     const candidatureCount = await Candidatures.find({wilaya: lawilaya.code}).countDocuments();
     const medecinCount = await Medecins.find({
      Wilaya:lawilaya._id
    }).countDocuments();
 
     const counts = {
         candidaturesCount: candidatureCount,
         medecinsCount: medecinCount,
         nbPlaces: nbPlaces
       };
 
     console.log("les counts des tables", counts)
     res.status(201).json(counts)
  } catch (error) {
     res.status(500).json({ error: 'Internal Server Error' });
  }
 }

