function logger(req, res, next) {
    console.log("Method:", req.method);
    console.log("URL:", req.originalUrl);
    console.log("Timestamp:", new Date().toISOString());

    next();
}

module.exports = logger;