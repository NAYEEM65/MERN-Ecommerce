const express = require('express');
const { registerUser, getAllUsers, loginUser, logOut } = require('../controllers/userController');
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logOut);
router.route('/users').get(getAllUsers);
module.exports = router;
