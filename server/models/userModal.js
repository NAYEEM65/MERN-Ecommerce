const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: [30, 'name can not exceed 30 characters'],
        minLenght: [4, 'name should be more than 4 characters'],
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
        maxLength: [50, 'password can not exceed 50 characters'],
        minLenght: [6, 'password should be more than 6 characters'],
        select: false,
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
    resetPasswordToken: String,
    resetPasswordTokenExpires: Date,
});

module.exports = mongoose.model('User', userSchema);
