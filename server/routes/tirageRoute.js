const router = require('express').Router();
const randometirage=require('../controllers/AlgoTirage/Randome')
const ageBracketsTirage = require('../controllers/AlgoTirage/ageBrackets')


router.route("/random").post(randometirage.electPilgrims);
router.route("/ageBrackets").post(ageBracketsTirage.elecPilgrimsCumDist);

module.exports=router;