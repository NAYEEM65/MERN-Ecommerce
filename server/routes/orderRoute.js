const express = require('express');
const { newOrder, getSingleOrder, myOrders } = require('../controllers/orderController');
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

router.route('/order/new').post(isAuthenticatedUser, newOrder);
router.route('/order/:id').get(isAuthenticatedUser, authorizeRoles('admin'), getSingleOrder);
router.route('/orders/my-order').get(isAuthenticatedUser, myOrders);

module.exports = router;
