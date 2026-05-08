import React from "react";
import "../employee/EmployeeProfile.css";

import { useauth } from "../auth/hooks/auth.hooks";

const EmployeeProfile = () => {



const {employee,loading}=useauth()

if(loading){
    return (
        <main><h1>Loading.......</h1></main>
    )
}





  return (
    <div className="profile-container">
      <div className="profile-card">

        <div className="top-section">
          <div className="avatar">
            {employee?.username?.charAt(0).toUpperCase()}
          </div>

          <div>
            <h1>{employee?.username}</h1>
            <p>{employee?.email}</p>
          </div>
        </div>

        <div className="info-grid">

          <div className="info-box">
            <h3>Salary</h3>
            <p>₹ {employee?.salary}</p>
          </div>

          <div className="info-box">
            <h3>Age</h3>
            <p>{employee?.age}</p>
          </div>

          <div className="info-box">
            <h3>Attendance</h3>
            <p>{employee?.attendance}</p>
          </div>

          <div className="info-box">
            <h3>Work From Home</h3>
            <p>
              {employee?.workathome ? "Yes" : "No"}
            </p>
          </div>

          <div className="info-box">
            <h3>Location</h3>
            <p>{employee?.location}</p>
          </div>

          <div className="info-box">
            <h3>Email</h3>
            <p>{employee?.email}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;