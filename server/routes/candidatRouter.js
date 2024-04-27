const express = require("express");
const router = express.Router();
const candidatController = require("../controllers/candidatControllers");
const requireAuth = require("../middleware/requireAuth");

// Route for adding a new candidate (requires authentication)
router.post("/add", requireAuth, candidatController.addCandidat);

// Other routes for fetching wilayas, dairas, etc.

module.exports = router;


