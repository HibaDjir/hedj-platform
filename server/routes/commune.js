const router = require('express').Router();
const {
    createCommune,
    getAllCommune,
    getCommune,
    getCodeCommune,
    deleteCommune,
    updateCommune,
    ajouterCotatCommune,
    getCommuneById,
    getNbCommune
} = require('../controllers/CommuneControllers')
router.get('/All',getAllCommune)

router.get('/comById/:id',getCommuneById)

router.get('/find', getCommune)

router.get('/codeCom/find', getCodeCommune)

router.post('/', createCommune)

router.delete('/:id', deleteCommune)

router.put('/update', updateCommune)

router.post('/ajouterCotat', ajouterCotatCommune)

router.get('/lacommune/:code', getNbCommune)


module.exports=router;