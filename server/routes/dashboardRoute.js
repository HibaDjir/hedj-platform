const router = require('express').Router();
const dashboardController = require('../controllers/dashboardController')

router.route('/getCounts').get(dashboardController.getCounts)
router.route('/getFMCandCount').get(dashboardController.getFMCandCount)
router.route('/getFMPelCount').get(dashboardController.getFMPelCount)
router.route('/getPelerinParAge').get(dashboardController.getPelerinParAge);
router.route('/getPelerinParYear').get(dashboardController.getPelerinByYear);

module.exports=router;