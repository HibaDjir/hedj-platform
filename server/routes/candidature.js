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
    getCandByWilaya
} = require('../controllers/CandidatureControllers')

router.get('/', getAllCandidature)

router.get('/:name', getCandByWilaya)

router.get('/:id', getFirstCandidature)

router.get('/genre/find', getCandidature)

router.get('/genreMale/find', getCandidatureUserMale)

router.get('/id_user/find', getCandidatureUser)

router.post('/', createCandidature)

router.delete('/:id', deleteCandidature)

router.patch('/:id', updateCandidature)

module.exports=router;