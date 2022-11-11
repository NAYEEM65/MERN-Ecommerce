const app = require('./app');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
//config
dotenv.config({ path: 'server/config/config.env' });

//middleware
app.use(express.json());

const PORT = process.env.PORT || 5000;

//connectDB
connectDB();

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});
