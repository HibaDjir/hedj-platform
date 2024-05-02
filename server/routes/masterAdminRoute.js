const router = require('express').Router();
const masterAdminController=require('../controllers/masterAdminController')

router.route("/createSousAdmin").post(masterAdminController.createSousAdmin);


module.exports=router;