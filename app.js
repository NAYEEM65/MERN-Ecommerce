const express = require('express');

const app = express();
app.use(express.json());
//routes

const product = require('./routes/productsRoute');
app.use('/api/v1/', product);

module.exports = app;
