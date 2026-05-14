
import { useContext } from "react";
import { AuthContext } from "../auth.context";
import {adminlogin, adminlogout, employeelogin, employeelogout, employeeRegister, registeradmin}  from "../auth.api";


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
        throw err;
    }finally{
        setloading(false)
    }

    }
    const handleemployeelogin=async({username,password})=>{
        setloading(true)
try{
    const res=await employeelogin({username,password});
    setemployee(res.employee)
    return res
}catch(err){
   throw err;
}finally{
    setloading(false)
}}
const handleadminregister=async({username,
  salary,
  age,
  email,
  password,
  workathome,
  location,
  attendance})=>{
    setloading(true)
    try{
        const res=await registeradmin({ username,
  salary,
  age,
  email,
  password,
  workathome,
  location,
  attendance,})
  setadmin(res.admin)
  return res
    }
    catch(err){
       throw err;
    }
    finally{
        setloading(false);
    }
  }

  const handleadminlogin=async({username,password})=>{
setloading(true)

try{
    const res=await adminlogin({username,password});
    setadmin(res.admin)
    return res
}catch(err){
    setadmin(null)
}finally{
    setloading(false)
}

}
const handlelogoutemployee=async()=>{
setloading(true)
try{
    const res=await employeelogout()

    setemployee(null)
    return res
}catch(err){
    throw err;
}finally{
    setloading(false)
}
}
const handlelogoutadmin=async()=>{
   setloading(true)
 try{
    const res=await adminlogout()
    setadmin(null)
    return res

 } catch(err){
    throw err;
 }
 finally{
    setloading(false)
 }
}
    
    return{handlelogoutadmin,handlelogoutemployee,handleadminlogin,
       handleadminregister,
       handleemployeelogin,
        handleemployeeregister,
        setadmin,setemployee,loading,setloading,admin,employee
    }
}
