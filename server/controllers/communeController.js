const Commune = require('../models/Commune')


exports.getAllCommune = async(req, res)=>{
    try {
        const commune = await Commune.find()
        res.status(200).json(commune)
    } catch (error) {
        res.status(500).json("Server Error")
    }

}

exports.ajouterCotatCommune = async(req, res) =>{
    try {
        const nb_places = req.body.nb_places
        const encodedNameCommune = encodeURIComponent(req.params.name)
        const commune = await Commune.findOneAndUpdate({ar_name:encodedNameCommune }, {nb_places}, {
            new: true
          })
        console.log(commune)
    } catch (error) {
        res.status(500).json("Server Error")
    }
}

