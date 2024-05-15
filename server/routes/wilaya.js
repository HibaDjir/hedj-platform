const router = require('express').Router();
const {
    createWilaya,
    getAllWilaya,
    getWilaya, 
    getCodeWilaya,
    deleteWilaya,
    updateWilaya,
    ajouterCotatWilaya,
    getWilayaName
} = require('../controllers/wilayaControllers')

router.get('/All',getAllWilaya)

router.get('/:id', getWilaya)

router.get('/name/:name', getWilayaName)


router.get('/codeWil/find', getCodeWilaya)

router.post('/', createWilaya)

router.delete('/:id', deleteWilaya)

//router.patch('/:id', updateWilaya)

router.put('/update', updateWilaya)

router.post('/ajouterCotat', ajouterCotatWilaya)

module.exports=router;