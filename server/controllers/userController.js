const ErrorHandler = require('../utils/erroHandler');
const cacthAsyncError = require('../middleware/cacthAsyncError');

const User = require('../models/userModal');

exports.registerUser = cacthAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'this is your avatar',
            url: 'this is sample image url',
        },
    });
    res.status(201).json({
        success: true,
        user,
    });
});

exports.getAllUsers = cacthAsyncError(async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        users,
    });
});
