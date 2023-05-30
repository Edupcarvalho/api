class AppError{
    message;
    statusCode;

    constuctor(message,statusCode = 400){
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;