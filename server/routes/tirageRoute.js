const router = require('express').Router();
const randometirage=require('../controllers/AlgoTirage/Randome')
router.route("/random").post(randometirage.electPilgrims);
module.exports=router;