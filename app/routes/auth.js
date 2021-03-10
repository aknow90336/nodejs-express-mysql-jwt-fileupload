const router = require("express").Router();
const authController = require('../controllers/authController');

router.post('/login', authController.login);
router.post('/logout', authController.authenticate, authController.logout);
router.get('/profile', authController.authenticate, authController.getProfile);

module.exports = router;