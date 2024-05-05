const router = require('express').Router();
const express = require('express');
// Middleware to handle character encoding
router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const pelerinController = require('../controllers/pelerinController');
router.route("/getAllPelerins").get(pelerinController.getAllPelerins);
router.route("/deleteAllPelerin").delete(pelerinController.deleteAllPelerin);
router.route("/getPelerinByWilaya/:name").get(pelerinController.getPelerinByWilaya);
router.route("/getPelerinByCommune/:name", ).get(pelerinController.getPelerinByCommune);
router.route("/deleteAllPelerins", ).delete(pelerinController.deleteAllPelerinsFromDb);





module.exports=router;