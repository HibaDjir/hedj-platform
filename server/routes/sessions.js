const router = require('express').Router();
const {
    createSession,
    getAllSession,
    getSession, 
    getAnneeSession,
    getStateSession,
    deleteSession,
    updateSession,
} = require('../controllers/sessionsControllers')

router.get('/All',getAllSession)

router.get('/:id', getSession)

router.get('/anneeSession/find', getAnneeSession)

router.get('/stateSession/find', getStateSession)

router.post('/', createSession)

router.delete('/:id', deleteSession)

router.patch('/:id', updateSession)

module.exports=router;