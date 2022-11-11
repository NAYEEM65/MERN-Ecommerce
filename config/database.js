const mongoose = require('mongoose');

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then((data) => {
        console.log(`mongodb connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
        console.log(err);
    });
