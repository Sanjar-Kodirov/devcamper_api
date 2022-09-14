const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  getCourses,
  getCourse,
  addCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courses");
const { protect } = require("../middleware/auth");

// const Course = require("../models/Course");

router.route("/").get(getCourses).post(protect, addCourse);
router
  .route("/:id")
  .get(getCourse)
  .put(protect, updateCourse)
  .delete(protect, deleteCourse);
module.exports = router;
