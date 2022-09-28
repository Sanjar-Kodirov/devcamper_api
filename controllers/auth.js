// const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("express-async-handler");
// const sendEmail = require("../utils/sendEmail");
const User = require("../models/User");

// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  //   Create user
  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  // create jwt token
  const token = user.getSignedJwtToken();

  res.status(200).json({ success: true, token, data: user });
  //   sendTokenResponse(user, 200, res);
});

// @desc      Login user
// @route     POST /api/v1/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate emil & password
  if (!email || !password) {
    return next(new ErrorResponse("Please provide an email and password", 400));
  }

  // Check for user
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  // check if password is matches
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  console.log(isMatch);

  // create jwt token
  const token = user.getSignedJwtToken();

  if (!user) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  sendTokenResponse(user, 200, res);
});

exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc      Forgot password
// @route     POST /api/v1/auth/forgotpassword
// @access    Public
exports.forgotPassword = asyncHandler(async (req, res, next) => {
  // find user by email
  const user = await User.findOne({ email: req.body.email });

  console.log(user);
  if (!user) {
    return next(new ErrorResponse("There is no user with that email", 404));
  }

  // get reset token
  const resetToken = user.getResetPasswordToken();
  console.log(resetToken);
  // save user
  await user.save({ validateBeforeSave: false });
  res.send({ success: true, message: user });
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
  });
};
