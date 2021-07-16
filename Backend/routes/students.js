/*Import the express dependency and 
Route() function which is in the express*/ 
const router = require("express").Router();

//Import the student model file
let Student = require("../models/student");

//post(Insert)
//url component
router.route("/add").post((req,res)=>{
    //body
    //creaate variables to assign the requested url body values
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    })
    newStudent.save(()=>{
        res.json("Student added.");
    }).catch((err)=>{
        console.log(err);
    })
})

//Get(display)
router.route("/").get((req,res)=>{
    //body
    Student.find().then((students)=>{
        res.json(students)
    }).catch((error)=>{
        console.log(err)
    })
})

//Find and update the student


//Delete




module.exports = router;