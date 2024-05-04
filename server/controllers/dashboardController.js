const Candidatures = require('../models/Candidature')
const Pelerins = require('../models/pelerin')
const Medecins = require('../models/Medecin')
const Admins = require('../models/sousAdmin')
const Session = require('../models/Sessions');



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
                if (candidature.genre === "أنثى") {
                    femaleCount++;
                } else if (candidature.genre === "ذكر") {
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


exports.getPelerinByYear=async(req,res)=>{

    try{
  // Get all sessions
  const sessions = await Session.find({});
// Initialize an array to store the result
const result = [];
  // Iterate over each session and update the total_candidats_inscri field
  for (const session of sessions) {
      const { annee } = session;
      
        
      // Get the count of "Pelerins" with elected candidatures for the current session year
      const pelerinCount = await Candidatures.countDocuments({ id_session: annee, status: 'is_elected' });
      result.push({ year: annee, count: pelerinCount });
    
    }
    return result;
     res.json(result)
}
    catch(err){


    }
}