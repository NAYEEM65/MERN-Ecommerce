const express = require('express');
const { registerUser, getAllUsers } = require('../controllers/userController');
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/users').get(getAllUsers);
module.exports = router;
