//imporrt a package and assign to a variable.
//Then we can call the function easily
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//access to students.js file
const students = require("./routes/students.js");
/*if call the /student in the url it calls path 
in the students variable.*/
//url
app.use("/student",students);

//const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

//create a variable to define the server port number
/* 8070 means whwn run the application on local computer, 
we define a port number to run the application in the PC.
local pc becomes the server*/
//process.env.PORT means assign a available port number.
const PORT = process.env.PORT || 8070;

app.use(cors());
//to pass the key value, due to mongodb has the jason format
app.use(express.json());
//app.use(bodyParser.jason());

//get the stored url 
const URL = process.env.MONGODB_URL;


//make the configurations
 mongoose.connect(URL,{
     useCreateIndex:true,
     useNewUrlParser:true,
     useUnifiedTopology:true,
     useFindAndModify:true
 });

 //create the connection
const conn = mongoose.connection;
//open the connection
mongoose.connection.once("open", ()=>{
    console.log("Mongodb Connection success!!");
})

//lisen the por
app.listen(PORT,()=>{
    console.log(`Server is up and running on port number: ${PORT}`)
})
