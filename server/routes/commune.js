const router = require('express').Router();
const {
    createCommune,
    getAllCommune,
    getCommune,
    getCodeCommune,
    deleteCommune,
    updateCommune,
} = require('../controllers/CommuneControllers')
router.get('/All',getAllCommune)

router.get('/find', getCommune)

router.get('/codeCom/find', getCodeCommune)

router.post('/', createCommune)

router.delete('/:id', deleteCommune)

router.patch('/:id', updateCommune)

module.exports=router;