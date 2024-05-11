const router = require('express').Router();
const {
    createCandidature,
    getAllCandidature,
    getFirstCandidature,
    getCandidature,
    getCandidatureUser,
    deleteCandidature,
    updateCandidature,
    getCandByWilaya,
    deleteCands
} = require('../controllers/CandidatureControllers')

router.get('/', getAllCandidature)

router.get('/:name', getCandByWilaya)

router.get('/:id', getFirstCandidature)

router.get('/genre/find', getCandidature)

router.get('/id_user/find', getCandidatureUser)

router.post('/', createCandidature)

router.delete('/:id', deleteCandidature)

router.patch('/:id', updateCandidature)

router.delete('/', deleteCands )

module.exports=router; 