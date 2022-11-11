const express = require('express');
const errorMiddleware = require('./middleware/error');

const app = express();

//middleware
app.use(express.json());
app.use(errorMiddleware);
//routes

const product = require('./routes/productsRoute');
app.use('/api/v1/', product);

module.exports = app;
