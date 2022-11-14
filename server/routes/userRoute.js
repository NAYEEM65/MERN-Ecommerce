const express = require('express');
const {
    registerUser,
    getAllUsers,
    loginUser,
    logOut,
    forgotPassword,
    resetPassword,
    getUserDetails,
} = require('../controllers/userController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/users').get(getAllUsers);
router.route('/user-details').get(isAuthenticatedUser, getUserDetails);
router.route('/logout').get(logOut);
router.route('/forgot-password').post(forgotPassword);
router.route('/reset-password/:token').put(resetPassword);

module.exports = router;
