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
        shippingPrice,
        totalPrice,
    } = req.body;

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
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
    console.log(orders);
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

const updateStock = async (id, quantity) => {
    const product = await Product.findById(id);
    product.stock -= quantity;
    console.log(product);

    await product.save({ validateBeforeSave: false });
};

// order status update by Admin
exports.updateOrder = cacthAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler('Order not found with this Id', 404));
    }

    if (order.orderStatus === 'Delivered') {
        return next(new ErrorHandler('You have already delivered this order', 400));
    }

    if (req.body.status === 'Shipped') {
        order.orderItems.forEach(async (ord) => {
            await updateStock(ord.product, ord.quantity);
        });
    }
    order.orderStatus = req.body.status;

    if (req.body.status === 'Delivered') {
        order.deliveredAt = Date.now();
    }

    await order.save({ validateBeforeSave: false });
    res.status(200).json({
        success: true,
    });
});

// delete Order -- Admin
exports.deleteOrder = cacthAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler('Order not found with this Id', 404));
    }

    await order.remove();

    res.status(200).json({
        success: true,
    });
});
