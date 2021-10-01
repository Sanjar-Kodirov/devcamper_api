const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db')
// Load env files
dotenv.config({
    path: './config/config.env'
});
// connect to database
connectDB();
// Route files
const bootcamp = require('./routes/bootcamp');

const app = express();
// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}



app.use('/api/v1/bootcamps', bootcamp);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
// Handle unhandled rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err}`)
    // close server and exit process
    server.close(() => process.exit(1));
})


/* from lessons */


// -------------just practice for middleware
//app.use(logger)
// Mount routers
//const logger = require('./middleware/logger');