const ErrorResponse = require("../utils/errorResponse");

function errorHandler(err, req, res, next) {
  let error = { ...err };

  error.message = err.message;

  // Log to console for dev
  console.log(err);

  if (err.name === "CastError") {
    const message = `Resource not found`;
    error = new ErrorResponse(message, 404);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server error",
  });
}
module.exports = errorHandler;
