const router = require('express').Router();
const dashboardController = require('../controllers/dashboardController')

router.route('/getCounts').get(dashboardController.getCounts)
router.route('/getFMCandCount').get(dashboardController.getFMCandCount)
router.route('/getFMPelCount').get(dashboardController.getFMPelCount)



module.exports=router;