const router = require('express').Router();
const medecinController=require('../controllers/medecinController')

router.route('/getAllMedecins').get(medecinController.getAllMedecins)
router.route('/createMedecin').post(medecinController.createMedecin)

module.exports=router;