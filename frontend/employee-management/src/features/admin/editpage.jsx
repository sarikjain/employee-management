import React, { useEffect, useState } from "react";
import "../admin/editpage.css";

import { useNavigate } from "react-router";
import { getallemployees, updateemployee } from "../auth/auth.api";
import { useauth } from "../auth/hooks/auth.hooks";


const EditEmployee = () => {

  
  const navigate = useNavigate();
const {selectedemployee}=useauth()
  const [username, setusername] = useState("");
  const [salary, setsalary] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");
  const [attendance, setattendance] = useState("");
  const [location, setlocation] = useState("");
  const [workathome, setworkathome] = useState(false);

  useEffect(() => {

    const fetchemployee = async () => {

      try {

     

        if(selectedemployee){

          setusername(selectedemployee.username);
          setsalary(selectedemployee.salary);
          setage(selectedemployee.age);
          setemail(selectedemployee.email);
          setattendance(selectedemployee.attendance);
          setlocation(selectedemployee.location);
          setworkathome(selectedemployee.workathome);
        }

      } catch(err){

       throw err;
      }
    }

    fetchemployee();

  }, [selectedemployee]);

  const handlesubmit = async(e) => {

    e.preventDefault();

    try{
        

      const res=await updateemployee(selectedemployee,{
        username,
        salary,
        age,
        email,
        attendance,
        location,
        workathome
      });
if(res){
    sessionStorage.removeItem("selectedemployee");
      navigate("/admindash");}

    }catch(err){

      throw err;
    }
  }

  return (
    <div className="edit-container">

      <form className="edit-form" onSubmit={handlesubmit}>

        <h1>Edit Employee</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />

        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setsalary(e.target.value)}
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setage(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setlocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Attendance"
          value={attendance}
          onChange={(e) => setattendance(e.target.value)}
        />

        <div className="checkbox-div">

          <label>Work From Home</label>

          <input
            type="checkbox"
            checked={workathome}
            onChange={(e) => setworkathome(e.target.checked)}
          />

        </div>

        <button type="submit">
          Update Employee
        </button>

      </form>
    </div>
  );
};

export default EditEmployee;