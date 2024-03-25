const router = require('express').Router();
const {
    createCandidature,
    getAllCandidature,
    getCandidature,
    deleteCandidature,
    updateCandidature,
} = require('../controllers/CandidatureControllers')

router.get('/', getAllCandidature)

router.get('/find', getCandidature)

router.post('/', createCandidature)

router.delete('/:id', deleteCandidature)

router.patch('/:id', updateCandidature)

module.exports=router;