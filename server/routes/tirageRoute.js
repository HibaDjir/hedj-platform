
const express = require('express');
const router = express.Router();
const Candidature = require('../models/Candidature');


const randometirage=require('../controllers/AlgoTirage/Randome')
const ageBracketsTirage = require('../controllers/AlgoTirage/ageBrackets')
const nbrEnregAlgo = require('../controllers/AlgoTirage/nbr_enrg')
const perfCtrlr = require('../controllers/AlgoTirage/perf')





router.route("/random").post(randometirage.electPilgrims);
router.route("/ageBrackets").post(ageBracketsTirage.elecPilgrimsCumDist);
router.route("/nbrEnr").post(nbrEnregAlgo.nbrEnregAlgo);
router.route("/perf").post(perfCtrlr.perfCtrlr);




module.exports=router;
