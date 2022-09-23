const express = require("express");
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
} = require("../controllers/bootcamps");

// othe resource router
const courseRouter = require("./courses");

const router = express.Router();

const { protect, authrize } = require("../middleware/auth");

// re route into other routes
router.use("/:bootcampId/courses", courseRouter);

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);
router
  .route("/")
  .get(getBootcamps)
  .post(protect, authrize("publisher", "admin"), createBootcamp);
router
  .route("/:id")
  .get(getBootcamp)
  .delete(protect, authrize("publisher", "admin"), deleteBootcamp)
  .put(protect, authrize("publisher", "admin"), updateBootcamp);
module.exports = router;
