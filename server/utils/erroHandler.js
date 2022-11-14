class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ErrorHandler;

// function ErrorHandler(message, statusCode) {
//     const someError = { message, statusCode };
//     Error.captureStackTrace(someError);
//     throw someError;
// }
// try {
//     ErrorHandler();
// } catch (err) {
//     console.log(err);
//     console.log(err.stack);
// }

// module.exports = ErrorHandler;
