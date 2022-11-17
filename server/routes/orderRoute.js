const express = require('express');
const {
    newOrder,
    getSingleOrder,
    myOrders,
    getAllOrders,
    updateOrder,
    deleteOrder,
} = require('../controllers/orderController');
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

router.route('/order/new').post(isAuthenticatedUser, newOrder);
router.route('/order/:id').get(isAuthenticatedUser, authorizeRoles('admin'), getSingleOrder);
router.route('/orders/my-order').get(isAuthenticatedUser, myOrders);
router.route('/orders/all-orders').get(isAuthenticatedUser, authorizeRoles('admin'), getAllOrders);
router.route('/order/update/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateOrder);
router
    .route('/orders/delete/:id')
    .delete(isAuthenticatedUser, authorizeRoles('admin'), deleteOrder);

module.exports = router;
