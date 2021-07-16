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
//using async, we can stop crash the requests   
router.route("/update/:id").put(async (req,res)=>{
    //body
    //fetch the id from url.
    let stuid = req.params.id;
    //B structure
    const {name,age,gender} = req.body;

    const updateStudent = {
        name,
        age,
        gender
    }

    //check the id is available in the mongodb and update 
    //without if condiyion 
    const update = await Student.findByIdAndUpdate(stuid,updateStudent).then(()=>{
        res.status(200).send({status:"Status user updated",user:update})
    }).catch((err)=>{
        console.log(err);
        res.status(404).send({status:"Error with updated data.",error:err.message});
    })

})

//Delete
router.route("/delete/:id").delete(async (req,res)=>{
    const Stuid = req.params.id;

    await Student.findByIdAndDelete(Stuid).then(()=>{
        res.status(200).send({status: "User deleted."});
    }).catch((err)=>{
        console.log(err.message);
        res.status(404).send({status:"User deleted.",error:err.message});
    })

})

//get single user data
router.route("/get/:id").get(async (req,res)=>{
    //store student id
    let Stuid = req.params.id

    const userDetails = await Student.findById(Stuid).then(()=>{
        res.status(200).send({status:"User details", user:userDetails});
    }).catch((err)=>{
        console.log(err);
        res.status(404).send({message:"Error with finding user details" });
    })


})


module.exports = router;