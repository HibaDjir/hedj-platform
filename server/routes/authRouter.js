const router = require('express').Router();

const authController = require('../controllers/authControllers');

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/:id/verify/:token").get(authController.verifyEmail)
router.route("/forgetpassword").post(authController.forgotPassword)
router.route("/resetPassword/:id/:token").post(authController.resetPassord)

module.exports=router;

