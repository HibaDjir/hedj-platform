const router = require('express').Router();
const masterAdminController=require('../controllers/masterAdminController')

router.route("/createSousAdmin").post(masterAdminController.createSousAdmin);
router.route("/getAllSaousAdmin").get(masterAdminController.getAllSousAdmin);
router.route("/getSaousAdminById/:id").get(masterAdminController.getsousAdminById);
router.route("/getSaousAdminByuserId/:id").get(masterAdminController.getSousAdminByUser);
router.route("/updateSousAdmin/:id").patch(masterAdminController.updateSousAdmin);
router.route('/deleteSousAdmin/:id').delete(masterAdminController.deleteSousAdmin)
router.route("/getSousAdminWilaya/:id").get(masterAdminController.getAdminsWilaya);




module.exports=router;