const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("express-async-handler");
const Course = require("../models/Course");
const Bootcamp = require("../models/Bootcamp");

// @desc      Get courses
// @route     GET /api/v1/courses
// @route     GET /api/v1/bootcamps/:bootcampId/courses
// @access    Public
exports.getCourses = asyncHandler(async (req, res, next) => {
  if (req.params.bootcampId) {
    const courses = await Course.find({
      bootcamp: req.params.bootcampId,
    }).populate({
      path: "bootcamp",
      select: ["name", "description", "id", "createdAt"],
    });

    return res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } else {
    const courses = await Course.find().populate({
      path: "bootcamp",
      select: ["name", "description", "id", "createdAt"],
    });

    return res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
    // res.status(200).json(res.advancedResults);
  }
});

// @desc      Get single course
// @route     GET /api/v1/courses/:id
// @access    Public
exports.getCourse = asyncHandler(async function (req, res) {
  const course = await Course.findById(req.params.id).populate({
    path: "bootcamp",
    select: ["name", "description", "id", "createdAt"],
  });
  if (!course) {
    return next(
      new ErrorResponse(`No course with the id of ${req.params.id}`),
      404
    );
  }
  res.status(200).json({
    success: true,
    data: course,
  });
});

// @desc      Add course
// @route     POST /api/v1/bootcamps/:bootcampId/courses
// @access    Private

exports.addCourse = asyncHandler(async (req, res) => {
  const bootcamp = await Bootcamp.findById(req.params.bootcampId);

  if (!bootcamp) {
    return next(
      new ErrorResponse(`No bootcamp with the id of ${req.params.bootcampId}`),
      404
    );
  }
  const course = await Course.create({
    ...req.body,
    bootcamp: req.params.bootcampId,
  });

  res.status(200).json({
    success: true,
    data: course,
  });
});
