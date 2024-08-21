
// create express server
const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
//use the .env file in order to use the module
const dotenv = require("dotenv").config();
connectDB();
// create an object by referencing the express() function
const app = express();


// create a port for the server to listen on
const port = process.env.PORT || 3000;

//middleware in order to parse data into json
app.use(express.json());

//test api calls by creating a routes folder/file and 
// placing all api routes there. referenence within the following
// code ->
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// use the error handler middleware
app.use(errorHandler);

//create a test for PUT, POST, and DELETE api calls for the port number with and without /:id extensions



//create callback function for the application to listn to port
app.listen(port, () => {
    console.log(`listening and aware on port`, port);
});
