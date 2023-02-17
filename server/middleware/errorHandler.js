const errorHandler = (err, req, res, next) => {
    console.log(
        err
    )
    let status = 500;
    let message = "Internal Server Error";
    if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
        status = 400;
        message = err.errors.map((el) => el.message);
    } else if (err.name === "LoginError") {
        status = 400;
        message = "Invalid email or password";
    } else if (err.name === 'OrderError') {
        status = 400;
        message = 'Order failed to create';
    }
    res.status(status).json({ message });
}

module.exports = errorHandler;