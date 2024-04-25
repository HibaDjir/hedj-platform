// dairaRoutes.js
const express = require('express');
const router = express.Router();
const dairaController = require('../controllers/dairaControllers');

// Route for fetching all dairas
router.get('/', dairaController.getAllDairas);

module.exports = router;
