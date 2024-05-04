const Candidatures = require('../models/Candidature')
const Pelerins = require('../models/pelerin')
const Medecins = require('../models/Medecin')
const Admins = require('../models/sousAdmin')



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

