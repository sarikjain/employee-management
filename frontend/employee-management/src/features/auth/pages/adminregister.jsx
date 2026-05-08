// EmployeeForm.jsx

import React, { useState } from "react";
import "../pages/employeeregister.css";
import { useauth } from "../hooks/auth.hooks";
import {useNavigate} from "react-router"

const AdminForm = () => {
const Navigate=useNavigate()
    const {loading,handleadminregister}=useauth()
  const [formData, setFormData] = useState({
    username: "",
    salary: "",
    age: "",
    email: "",
    password: "",
    workathome: false,
    location: "",
    attendance: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res=await handleadminregister(formData)
if(res){
    Navigate("/")
}


  };

  if(loading)
{
    return(<main><h1>Loading........</h1></main>)
}
  return (
    <div className="employee-page">
      <div className="overlay"></div>

      <form className="employee-form" onSubmit={handleSubmit}>
        <h1>Admin Registration</h1>
        <p className="subtitle">
          Create and manage Admin records beautifully
        </p>

        <div className="input-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="number"
            name="salary"
            placeholder="Salary"
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="number"
            name="attendance"
            placeholder="Attendance %"
            onChange={handleChange}
            required
          />
        </div>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="workathome"
              checked={formData.workathome}
              onChange={handleChange}
            />
            Work From Home
          </label>
        </div>

        <button type="submit">Add Admin</button>
      </form>
    </div>
  );
};

export default AdminForm;