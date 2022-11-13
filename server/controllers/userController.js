const ErrorHandler = require('../utils/erroHandler');
const cacthAsyncError = require('../middleware/cacthAsyncError');

const User = require('../models/userModal');
const sendToken = require('../utils/jwtToken');

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
    const token = user.getJWTToken();
    res.status(201).json({
        success: true,
        user,
        token,
    });
});

exports.loginUser = cacthAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return next(new ErrorHandler('please enter email and password', 400));
    }
    const user = await User.findOne({ email }).select('+password');
    if (!user) {
        return next(new ErrorHandler('Invalid email or password', 401));
    }
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
        return next(new ErrorHandler('Invalid email or password', 401));
    }
    sendToken(user, 201, res);
});

//logout user

exports.logOut = cacthAsyncError(async (req, res, next) => {
    res.cookie('token', null, {
        expiresIn: new Date(Date.now()),
        httpOnly: true,
    });
    res.status(200).json({
        success: true,
        message: 'Logged out successfully',
    });
});

exports.getAllUsers = cacthAsyncError(async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        users,
    });
});
