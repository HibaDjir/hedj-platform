const router = require('express').Router();
const {
    createCandidature,
    getAllCandidature,
    getFirstCandidature,
    getCandidature,
    getCandidatureUser,
    getCandidatureUserMale,
    deleteCandidature,
    updateCandidature,
    getCandByWilaya,
    getCandidatureCodeWilaya,
    getCandidatureCodeWilayaPrise,
    getCandidatureCodeWilayaAttente
} = require('../controllers/CandidatureControllers')

router.get('/', getAllCandidature)

router.get('/name/:name', getCandByWilaya) //////nommer les route 

router.get('/:id', getFirstCandidature)

router.get('/genre/find', getCandidature)

router.get('/wilaya/find', getCandidatureCodeWilaya)

router.get('/wilaya/prise/find', getCandidatureCodeWilayaPrise)

router.get('/wilaya/attente/find', getCandidatureCodeWilayaAttente)

router.get('/genreMale/find', getCandidatureUserMale)

router.get('/id_user/find', getCandidatureUser)

router.post('/', createCandidature)

router.delete('/:id', deleteCandidature)

router.patch('/:id', updateCandidature)

module.exports=router;