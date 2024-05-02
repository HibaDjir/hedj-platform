const router = require('express').Router();
const pelerinController = require('../controllers/pelerinController');
router.route("/getAllPelerins").get(pelerinController.getAllPelerins);
router.route("/deleteAllPelerin").delete(pelerinController.deleteAllPelerin);
router.route("/getPelerinByWilaya/:name").get(pelerinController.getPelerinByWilaya);



module.exports=router;