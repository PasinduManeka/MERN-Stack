import { useState } from "react";
import axios from "axios";

const AddStudents = () => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');

    //submit function
    function sendData(e){
        e.preventDefault();
        
        const newStudent={name,age,gender}

        axios.post("http://localhost:8070/student/add",newStudent).then(()=>{
            alert("Student Aded...");  
        }).catch((err)=>{
            console.log(err);
            alert(err);
        })
    }

    return ( 
        <div className="container">
            <form onSubmit={sendData}>
                <div className="from-group">
                    <label for="name ">Name</label>
                    <input type="text" 
                    class="form-control"    
                    id="name" 
                    placeholder="Enter Student Name" 
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}
                    /> 
                </div>
                <div className="from-group">
                    <label for="age">Age</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="age" 
                    placeholder="Enter Student Age"
                    onChange={(e)=>{
                        setAge(e.target.value);
                    }}
                    /> 
                </div>
                <div className="from-group">
                    <label for="Gender">Gender</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="gender" 
                    placeholder="Enter Student Gender"
                    onChange={(e)=>{
                        setGender(e.target.value);
                    }}
                   /> 
                </div><br />
                <div className="form-group">
                    <button type="submit" class=" btn btn-success">Submit</button>
                </div>
                
            </form>
        </div>
     );
}
 
export default AddStudents;