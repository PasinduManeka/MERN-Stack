import React,{useState,useEffect} from "react";
import axios from "axios";

const AllStudents = () => {

    //create the const state
    const [students, setStudents] = useState([]);

    useEffect(()=>{
        const getStudents = ()=>{
            axios.get("http://localhost:8070/student/").then((res)=>{
                setStudents(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }

        //cal the function
        getStudents();

    },[])

    return ( 
        <div className="container">
            <h1>All Student</h1>
        </div> 
    );
}
 
export default AllStudents;