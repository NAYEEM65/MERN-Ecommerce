const ErrorHandler = require('../utils/erroHandler');
const cacthAsyncError = require('../middleware/cacthAsyncError');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');
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

//reset password

exports.forgotPassword = cacthAsyncError(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'User not found',
        });
    }
    //get reset password token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get(
        'host',
    )}/api/v1/reset-password/${resetToken}`;

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;
    try {
        await sendEmail({
            email: user.email,
            subject: `Ecommerce Password Recovery`,
            message,
        });

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`,
        });
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordTokenExpires = undefined;

        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
});
exports.resetPassword = cacthAsyncError(async (req, res, next) => {
    // creating token hash
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
        return res.status(400).json({
            success: false,
            message: 'Reset Password Token is invalid or has been expired',
        });
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(ErrorHandler('password does not match', 400));

        res.status(400).json({
            success: false,
            message: 'password does not match',
        });
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpires = undefined;

    await user.save();

    sendToken(user, 200, res);
});

//get all users
exports.getAllUsers = cacthAsyncError(async (req, res, next) => {
    const users = await User.find();
    res.status(200).json({
        success: true,
        users,
    });
});

// Get User Detail
exports.getUserDetails = cacthAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        user,
    });
});
