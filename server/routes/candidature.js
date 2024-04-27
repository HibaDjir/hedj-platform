const router = require('express').Router();
const {
    createCandidature,
    getAllCandidature,
    getFirstCandidature,
    getCandidature,
    getCandidatureUser,
    deleteCandidature,
    updateCandidature,
} = require('../controllers/CandidatureControllers')

router.get('/', getAllCandidature)

router.get('/:id', getFirstCandidature)

router.get('/genre/find', getCandidature)

router.get('/id_user/find', getCandidatureUser)

router.post('/', createCandidature)

router.delete('/:id', deleteCandidature)

router.patch('/:id', updateCandidature)

module.exports=router;