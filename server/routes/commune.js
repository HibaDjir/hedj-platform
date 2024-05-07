const router = require('express').Router();
const {
    createCommune,
    getAllCommune,
    getCommune,
    getCodeCommune,
    deleteCommune,
    updateCommune,
    ajouterCotatCommune,
    getCommuneById
} = require('../controllers/CommuneControllers')
router.get('/All',getAllCommune)

router.get('/comById/:id',getCommuneById)

router.get('/find', getCommune)

router.get('/codeCom/find', getCodeCommune)

router.post('/', createCommune)

router.delete('/:id', deleteCommune)

router.patch('/:id', updateCommune)

router.post('/ajouterCotat', ajouterCotatCommune)


module.exports=router;