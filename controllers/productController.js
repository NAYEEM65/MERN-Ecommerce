const Product = require('../models/productModel');

const catchAsyncErrors = require('../middleware/cacthAsyncError');

//create a new Product -- admin only
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product,
    });
});
//update a new Product -- admin only
exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            success: false,
            message: 'Product not found',
        });
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        success: true,
        product,
    });
};

//delete product --admin only

exports.deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(500).json({
            success: false,
            message: 'Product not found',
        });
    } else {
        await product.remove();
        res.status(200).json({
            success: true,
            message: 'product deleted successfully',
        });
    }
};

//get product details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return res.status(500).json({
            success: false,
            message: 'Product not found',
        });
    }

    res.status(200).json({
        success: true,
        product,
    });
});

//get All Products
exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
};
