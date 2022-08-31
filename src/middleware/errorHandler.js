const errorHandler = (err, req, res, next) => {
    res.status(500).json({ msg: "Something failed", err })
}

module.exports = errorHandler;