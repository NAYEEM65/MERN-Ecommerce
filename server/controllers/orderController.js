const cacthAsyncError = require('../middleware/cacthAsyncError');
const Order = require('../models/orderModel');
const Product = require('../models/productModel');
const ErrorHandler = require('../utils/erroHandler');

// Create new Order
exports.newOrder = cacthAsyncError(async (req, res, next) => {
    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingCost,
        totalPrice,
    } = req.body;

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingCost,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id,
    });

    res.status(201).json({
        success: true,
        order,
    });
});
// get Single Order
exports.getSingleOrder = cacthAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');

    if (!order) {
        return next(new ErrorHandler('Order not found with this Id', 404));
    }

    res.status(200).json({
        success: true,
        order,
    });
});

// get logged in user  Orders
exports.myOrders = cacthAsyncError(async (req, res, next) => {
    const query = {
        user: req.user._id,
    };
    const orders = await Order.find(query);

    res.status(200).json({
        success: true,
        orders,
    });
});

// get all Orders
exports.getAllOrders = cacthAsyncError(async (req, res, next) => {
    const orders = await Order.find();

    let totalAmount = 0;

    orders.forEach((order) => {
        totalAmount += order.totalPrice;
    });

    res.status(200).json({
        success: true,
        totalAmount,
        orders,
    });
});
