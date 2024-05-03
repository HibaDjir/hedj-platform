const router = require('express').Router();
const medecinController=require('../controllers/medecinController')

router.route('/getAllMedecins').get(medecinController.getAllMedecins)
router.route('/createMedecin').post(medecinController.createMedecin)
router.route('/getMedecinById/:id').get(medecinController.getMedecinById)
router.route('/deleteAllMedecins').delete(medecinController.deleteAllMedecins)
router.route('/updateMedecinById/:id').patch(medecinController.updateMedecin)
router.route('/deleteMedecinByIdFromDb/:id').delete(medecinController.deleteMedecinByIdFromDb)
router.route('/deleteAllMedecinsFromDb').delete(medecinController.deleteAllMedecinsFromDb)
router.route('/deleteMedecinById/:id').patch(medecinController.deleteMedecinById)
router.route('/deleteAllMedecins').patch(medecinController.deleteAllMedecins)
router.route('/retrieveAllMedecins').patch(medecinController.retrieveAllMedecins)
router.route('/retrieveMedecinById/:id').patch(medecinController.retrieveMedecinById)





module.exports=router;