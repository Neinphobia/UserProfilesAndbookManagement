function errorHandler(err, req, res, next) {
  const errorResponse = {
    code: err.code || 404,

    message: err.message || "Internal Server Error_",
    timestamp: new Date().toLocaleString(),
    request: {
      method: req.method,
      url: req.url,
    },
  };

  // Send error response
  res.status(errorResponse.code).json(errorResponse).end();
}

module.exports = errorHandler;
