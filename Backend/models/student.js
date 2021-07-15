const mongoose = require('mongoose');

//assign the scheema package
const Schema = mongoose.Schema;

//create the schema and create the student's attributes
const studentSchema = new Schema({
    name : {
        type:String,
        required:true
    },
    age : {
        type:Number,
        required:true
    },
    gender : {
        type:String,
        required:true
    },
})

//send specific schema to particular table
//first parameter is table/document name and created schema name
const Student=mongoose.model("Student",studentSchema);

//export
module.exports = Student;
