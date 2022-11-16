const express = require('express');
const {
    getProductReviews,
    deleteReview,
    createProductReview,
} = require('../controllers/productController');
const {
    registerUser,
    getAllUsers,
    loginUser,
    logOut,
    forgotPassword,
    resetPassword,
    getUserDetails,
    updatePassword,
    getSingleUser,
    updateUserRole,
    deleteUser,
} = require('../controllers/userController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/users').get(getAllUsers);
router.route('/user-details').get(isAuthenticatedUser, getUserDetails);
router.route('/single-user/:id').get(isAuthenticatedUser, authorizeRoles('admin'), getSingleUser);
router.route('/update-user/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateUserRole);
router.route('/delete-user/:id').delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser);
router.route('/logout').get(logOut);
router.route('/forgot-password').post(forgotPassword);
router.route('/reset-password/:token').put(resetPassword);
router.route('/update-password').put(isAuthenticatedUser, updatePassword);
router.route('/review').put(isAuthenticatedUser, createProductReview);
router.route('/reviews').get(getProductReviews);
router.route('/reviews').delete(isAuthenticatedUser, deleteReview);

module.exports = router;
