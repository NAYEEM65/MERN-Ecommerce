const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/ecommerce';
const connectDB = () => {
    mongoose
        .connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then((data) => {
            console.log(`mongodb connected with server: ${data.connection.host}`);
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = connectDB;
