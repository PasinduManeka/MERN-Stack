const { request } = require("express");
//Import and create the object from student model class
const Student = require("../models/student");

const addStudent = async(req,res)=>{
    if(request.body){
        const name = req.body.name;
        const age = Number(req.body.age);
        const gender = req.body.gender;
        
        const newStudent = new Student(name,age,gender);

        try{
            await newStudent.save();
            res.status(201).json({saved: newStudent});
        }catch{

        }
        
    }
}

module.exports = {addStudent};