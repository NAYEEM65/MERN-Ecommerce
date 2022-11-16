const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    shippingInfo: {
        address: {
            type: String,
            required,
        },
        city: {
            type: String,
            required,
        },
        state: {
            type: String,
            required,
        },
        country: {
            type: String,
            required,
        },
        pinCode: {
            type: Number,
            required,
        },
        phoneNumber: {
            type: Number,
            required,
        },
    },

    orderItems: [
        {
            name: {
                type: String,
                required,
            },
            price: {
                type: Number,
                required,
            },
            quantity: {
                type: Number,
                required,
            },
            image: {
                type: String,
                required,
            },
            product: {
                type: mongoose.Schema.ObjectId,
                ref: 'Product',
                required,
            },
        },
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required,
    },
    paymentInfo: {
        id: {
            type: String,
            required,
        },
        status: {
            type: String,
            required,
        },
        paidAt: {
            type: Date,
            required,
        },
        itemsPrice: {
            type: Number,
            default: 0,
            required,
        },
        taxPrice: {
            type: Number,
            default: 0,
            required,
        },
        shipppingCost: {
            type: Number,
            default: 0,
            required,
        },
        totalPrice: {
            type: Number,
            default: 0,
            required,
        },
        orderStatus: {
            type: String,
            required,
            default: 'Processing',
        },
        deliverAt: Date,

        createdAt: {
            type: Date,
            default: Date.now(),
        },
    },
});

module.exports = mongoose.model('Order', orderSchema);
