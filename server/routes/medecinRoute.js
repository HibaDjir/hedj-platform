const router = require('express').Router();
const medecinController=require('../controllers/medecinController')

router.route('/getAllMedecins').get(medecinController.getAllMedecins)
router.route('/createMedecin').post(medecinController.createMedecin)
router.route('/getMedecinById/:id').get(medecinController.getMedecinById)
router.route('/deleteAllMedecins').delete(medecinController.deleteAllMedecins)
router.route('/deleteMedecinById/:id').delete(medecinController.deleteMedecinById)
router.route('/updateMedecinById/:id').post(medecinController.updateMedecin)


module.exports=router;