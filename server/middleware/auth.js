const ErrorHandler = require('../utils/erroHandler');
const cacthAsyncError = require('./cacthAsyncError');
const User = require('../models/userModal');
const jwt = require('jsonwebtoken');

exports.isAuthenticatedUser = cacthAsyncError(async (req, res, next) => {
    const { token } = req.cookies;

    if (token) {
        const decodedData = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decodedData.id);

        next();
    } else {
        return res.status(401).json({
            success: false,
            message: 'Please Login to access this resource',
        });
    }
});

exports.authorizeRoles = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: `Role: ${req.user.role} is not allowed to access this resouce `,
            });
        }

        next();
    };
};
