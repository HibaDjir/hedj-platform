const router = require('express').Router();

const {
    getAllTirageType,
    getTirageType,
    createTirageType,
    updateTirageType,
    getTirageAgeBracket,
    getTiragePerf
} = require('../controllers/TirageTypeControllers')

const {
    calculeTirageType
} = require('../controllers/AlgoTirage/algorithem_tirage')

router.get('/All',getAllTirageType)

router.get('/find', getTirageType)

router.post('/', createTirageType)

router.put('/update', updateTirageType)

router.put('/Tirage', calculeTirageType)

router.get('/criteria',getTirageAgeBracket)

router.get('/perfCriteria',getTiragePerf)





module.exports=router; 