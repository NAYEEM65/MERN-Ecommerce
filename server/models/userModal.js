const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: [30, 'name can not exceed 30 characters'],
            minlenght: [4, 'name should be more than 4 characters'],
        },
        email: {
            type: String,
            required: [true, 'Please enter your email address'],
            unique: true,
            validate: [validator.isEmail, 'Please enter a valid email'],
        },
        password: {
            type: String,
            required: true,
            maxlength: [50, 'password can not exceed 50 characters'],
            minlength: [6, 'password should be more than 6 characters'],
            select: false,
        },
        history: {
            type: Array,
            default: [],
        },
        avatar: {
            public_id: {
                type: String,
                required: true,
            },
            url: {
                type: String,
                required: true,
            },
        },
        role: {
            type: String,
            default: 'user',
        },
        about: {
            type: String,
            trim: true,
        },
        resetPasswordToken: String,
        resetPasswordTokenExpires: Date,
    },
    { timestamps: true },
);
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

//JSON WEB TOKEN
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_SECRET_EXPIRE,
    });
};

//compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

//Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
    // Generating Token
    const resetToken = crypto.randomBytes(32).toString('hex');

    // Hashing and adding resetPasswordToken
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken;
};

module.exports = mongoose.model('User', userSchema);
