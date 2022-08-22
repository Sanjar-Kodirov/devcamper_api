const express = require("express");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");
const app = express();

// load env vars
require("dotenv").config({ path: "./config/config.env" });
const port = process.env.PORT || 4000;

// connection to database
connectDB();
// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// route files
const bootcamps = require("./routes/bootcamps");

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}.`.white.bgGreen.bold);
});
// handle unhandled rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error ${err.message}`);
  // close server % exit process
  server.close();
});
