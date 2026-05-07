
import { useContext } from "react";
import { AuthContext } from "../auth.context";
import {employeelogin, employeeRegister}  from "../auth.api";


export const useauth=()=>{
    const context=useContext(AuthContext)
    const {employee,setemployee,admin,setadmin,loading,setloading}=context

    const handleemployeeregister=async( {username,salary,age,email,password,workathome,
location,
  attendance})=>{ 
    setloading(true)
    try{
        const res=await employeeRegister({ username,
  salary,
  age,
  email,
  password,
  workathome,
  location,
  attendance,})
  setemployee(res.employee)
  return res
    }catch(err){
        console.log(err.message)
    }finally{
        setloading(false)
    }

    }
    const handleemployeelogin=async({username,password})=>{
try{
    const res=await employeelogin({username,password});
    setemployee(res.employee)
    return res
}catch(err){
    console.log(err.message)
}finally{
    setloading(false)
}
    }
    return{
       handleemployeelogin, handleemployeeregister,setadmin,setemployee,loading,setloading,admin,employee
    }
    
}