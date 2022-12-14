const express = require('express');
const errorMiddleware = require('./middleware/error');
const cookieParser = require('cookie-parser');

const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(errorMiddleware);
//routes

const product = require('./routes/productsRoute');
const user = require('./routes/userRoute');
const order = require('./routes/orderRoute');
app.use('/api/v1/', product);
app.use('/api/v1/', user);
app.use('/api/v1/', order);

module.exports = app;
