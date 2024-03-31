const router = require('express').Router();
const {
    createWilaya,
    getAllWilaya,
    getWilaya,
    getCodeWilaya,
    deleteWilaya,
    updateWilaya,
} = require('../controllers/wilayaControllers')

router.get('/All',getAllWilaya)

router.get('/:id', getWilaya)

router.get('/codeWil/find', getCodeWilaya)

router.post('/', createWilaya)

router.delete('/:id', deleteWilaya)

router.patch('/:id', updateWilaya)

module.exports=router;