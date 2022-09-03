const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");
const app = express();

// load env vars
require("dotenv").config({ path: "./config/config.env" });

// connection to database
connectDB();

// route files
const bootcamps = require("./routes/bootcamps");
const courses = require("./routes/courses");

// body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount routers

app.use("/api/v1/bootcamps", bootcamps);
app.use("/api/v1/courses", courses);

// error handlers for routes
app.use(errorHandler);

const port = process.env.PORT || 4000;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}.`.white.bgGreen.bold);
});
// handle unhandled rejections
// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  // server.close(() => process.exit(1));
});
