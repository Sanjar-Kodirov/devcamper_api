// const crypto = require("crypto");
// const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("express-async-handler");
// const sendEmail = require("../utils/sendEmail");
const User = require("../models/User");

// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  res.send(email);
  // Create user
  //   const user = await User.create({
  //     name,
  //     email,
  //     password,
  //     role,
  //   });

  //   sendTokenResponse(user, 200, res);
});
