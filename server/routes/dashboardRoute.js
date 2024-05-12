const router = require('express').Router();
const dashboardController = require('../controllers/dashboardController')

router.route('/getCounts').get(dashboardController.getCounts)
router.route('/getCountsWilaya/:name').get(dashboardController.getCountsWilaya)
router.route('/getFMCandCount').get(dashboardController.getFMCandCount)
router.route('/getFMCandCountByWilaya/:name').get(dashboardController.getFMPelCountByWilaya)
router.route('/getFMPelCount').get(dashboardController.getFMPelCount)
router.route('/getPelerinParAge').get(dashboardController.getPelerinParAge);
router.route('/getPelerinParYear').get(dashboardController.countPelerinsByYear);
router.route('/getPelerinParYearByWilaya/:name').get(dashboardController.countPelerinsByYearByWilaya);
router.route('/getCountsWilaya/:name').get(dashboardController.getCountsWilaya)
router.route('/getPelerinParAgeWilaya/:name').get(dashboardController.getPelerinParAgeAndWilaya)
router.route('/getCondiddatureParAgeWilaya/:name').get(dashboardController.getCountOfCandidatureByAgeAndWilaya)
router.route('/getCandidParAge').get(dashboardController.getCandidatsByAge);



module.exports=router;