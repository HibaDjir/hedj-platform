const router = require('express').Router();

const {
    getAllTirageType,
    getTirageType,
    createTirageType,
    updateTirageType
} = require('../controllers/TirageTypeControllers')

const {
    calculeTirageType
} = require('../controllers/AlgoTirage/algorithem_tirage')

router.get('/All',getAllTirageType)

router.get('/find', getTirageType)

router.post('/', createTirageType)

router.put('/update', updateTirageType)

router.put('/Tirage', calculeTirageType)


module.exports=router;