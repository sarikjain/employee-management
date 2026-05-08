import React from "react";
import "../pages/employeelogin.css";
import { useState } from "react";
import { Link } from "react-router";
import { useauth } from "../hooks/auth.hooks";
import { useNavigate } from "react-router";
const Login = () => {
    const navigate=useNavigate()
    const {loading,handleemployeelogin}=useauth()
    const [password,setpassword]=useState("")
    const [username,setusername]=useState("")
    const handlesubmit=async()=>{

const res=await handleemployeelogin({username,password})
if(res){
    navigate("/employee/profile")
}
 }



 return (
    <div className="container">
      <div className="login-box">
        <h1>Welcome Back</h1>
        <p className="subtitle">Login to continue</p>

        <form>
          <div className="input-group">
            <label>Username</label>
            <input onChange={(e)=>{setusername(e.target.value)}} type="text" placeholder="Enter your username" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input onChange={(e)=>{setpassword(e.target.value)}}  type="password" placeholder="Enter your password" />
          </div>
<button onClick={handlesubmit} type="button">Login</button>
        </form>

        <p className="footer-text">
          Don’t have an account?<Link to={"/employee/register"}><span>Sign Up</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;