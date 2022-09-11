const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courses");

// const Course = require("../models/Course");

router.route("/").get(getCourses);
router.route("/").post(addCourse);
router.route("/:id").get(getCourse);
module.exports = router;
