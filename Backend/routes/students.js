/*Import the express dependency and 
Route() function which is in the express*/ 
const router = require("express").Router();

//Import the student model file
let Student = require("../models/student");

//post(Insert)
//url component
router.route("/add").post((req,res)=>{
    //creaate variables to assign the requested url body values
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gebder
    })
    newStudent.save(()=>{
        res.json("Student added.");
    }).catch((err)=>{
        console.log(err);
    })
})

//Get(display)
router.route("/").get()




module.exports = router;