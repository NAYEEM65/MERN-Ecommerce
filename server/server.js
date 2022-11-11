const app = require('./app');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
// Handling Uncaught Exception
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});
//config
dotenv.config({ path: 'server/config/config.env' });

const PORT = process.env.PORT || 5000;

//connectDB
connectDB();

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});

process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);

    server.close(() => {
        process.exit(1);
    });
});
