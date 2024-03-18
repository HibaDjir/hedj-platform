// wilayaRoutes.js
const express = require('express');
const router = express.Router();
const wilayaController = require('../controllers/wilayaControllers');

// Route for fetching all wilayas
router.get('/', wilayaController.getAllWilayas);

module.exports = router;
