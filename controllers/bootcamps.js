const ErrorResponse = require("../utils/errorResponse");
const Bootcamp = require("../models/Bootcamp"); // @desc      Get all bootcamps

// @route     GET /api/v1/bootcamps

// @access    Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, count: bootcamps.length, data: bootcamps });
  } catch (err) {
    console.log(200);
    next(err);
  }
};

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getBootcamp = async (req, res, next) => {
  // console.log(id);
  try {
    const bootcamps = await Bootcamp.findById(req.params.id);
    if (!bootcamps) {
      return next(
        new ErrorResponse(`Bootcamp with id ${req.params.id} not found`, 404)
      );
    }
    res.status(200).json({ success: true, data: bootcamps });
  } catch (err) {
    next(err);
  }
};

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
exports.createBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    next(err);
  }
};

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateBootcamp = async (req, res) => {
  const { id } = req.params;
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    next(err);
  }
};

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deleteBootcamp = async (req, res) => {
  const { id } = req.params;
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    next(err);
  }
};
