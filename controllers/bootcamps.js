// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
exports.getBootcamps = (req, res) => {
  res.status(200).json({ success: true, message: "Data" });
  console.log(req.hello);
};

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
exports.getBootcamp = (req, res) => {
  res
    .status(200)
    .json({ success: true, message: `single data ${req.params.id}` });
};

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
exports.createBootcamp = (req, res) => {
  res.status(200).json({ success: true, message: `Data post` });
};

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
exports.updateBootcamp = (req, res) => {
  res.status(200).json({ success: true, message: `Data ${req.params.id}` });
};

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
exports.deleteBootcamp = (req, res) => {
  req.status(200).json({ success: true, message: `Data ${req.params.id}` });
};
