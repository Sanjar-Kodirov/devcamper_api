const express = require("express");
const morgan = require("morgan");

const app = express();
// Dev logging middleware
// if (process.env.NODE_ENV === "development") {
app.use(morgan("dev"));
// }
// route files
const bootcamps = require("./routes/bootcamps");

// load env vars
const port = process.env.PORT || 5000;
require("dotenv").config();

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
