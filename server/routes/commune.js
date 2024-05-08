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

<<<<<<< HEAD
router.get('/comById/:id',getCommuneById)
=======
//router.get('/:id',getCommuneById)
>>>>>>> 203afcec4f85ee6a5f429612566aa191079169f6

router.get('/find', getCommune)

router.get('/codeCom/find', getCodeCommune)

router.post('/', createCommune)

router.delete('/:id', deleteCommune)

router.put('/update', updateCommune)

router.post('/ajouterCotat', ajouterCotatCommune)


module.exports=router;