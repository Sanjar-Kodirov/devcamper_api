// function errorHandler(err, req, res, next) {
//   if (res.headersSent) {
//     return next(err);
//   }
//   res.status(500);
//   res.render("error", { error: err });
// }

const errorHandler = (err, req, res, next) => {
  // log to console for the dev
  console.log(err.stack.red);
  res.status(500).json({
    success: false,
    error: err.message,
  });
};
module.exports = errorHandler;
