import axios from "axios"

export async function employeelogin({username,password}){
 try{const res=await axios.post("http://localhost:3000/api/auth/employee/login",{username,password},{withCredentials:true})

if(res){
    return res.data;
}
 }
 catch(err){
    throw err;
 }
}



export async function employeeRegister({
  username,
  salary,
  age,
  email,
  password,
  workathome,
  location,
  attendance,
}) {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/auth/employee/register",
      {
        username,
        salary,
        age,
        email,
        password,
        workathome,
        location,
        attendance,
      },
      {
        withCredentials: true,
      }
    );

    return res.data;
  } catch (err) {
    throw err;
  }
}


export async function getemployee(){


    try{
        const res=await axios.get("http://localhost:3000/api/auth/employee/get",{withCredentials:true})
    return res.data}catch(err){
      throw err;
    }
}
export async function getadmin(){


    try{
        const res=await axios.get("http://localhost:3000/api/auth/admin/get",{withCredentials:true})
    return res.data}catch(err){
      throw err;
    }
}


export async function registeradmin({
 username,
  salary,
  age,
  email,
  password,
  workathome,
  location,
  attendance
}){
  try{
    const res=await axios.post("http://localhost:3000/api/auth/admin/register",{ username,salary,
  age,
  email,
  password,
  workathome,
  location,
  attendance},{withCredentials:true})
  return res.data;
  }
  catch(err){
throw err
  }
}

export async function adminlogin({username,password}){
try{
  const res=await axios.post("http://localhost:3000/api/auth/admin/login",{username,password},{withCredentials:true})
return res.data
}catch(err){
  throw err
}
}
export async function employeelogout(){


  try{
    const res=await axios.get("http://localhost:3000/api/auth/employee/logout",{withCredentials:true})
  if(res){return res.data}
  }catch(err){
   throw err
  }

}

export async function getallemployees(){
try{
const res=await axios.get("http://localhost:3000/api/auth/allemployees/get",{withCredentials:true})
if(res){
  return res.data
}
}catch(err){
  throw err
}





}
export async function getalladmins(){

try{
  const res=await axios.get("http://localhost:3000/api/auth/alladmin/get",{withCredentials:true})
  if(res){
    return res.data
  }

}catch(err){
  throw err
}
}
export async function deleteemployee(id){
  try{
  const res = await axios.delete(
      "http://localhost:3000/api/auth/employee/delete",
      {
        data:{ id },
        withCredentials:true
      }
    );

if(res){
  return res.data
}
  }catch(err){
    throw err
  }
}

export async function adminlogout(){
  try{

    const res=await axios.get("http://localhost:3000/api/auth/admin/logout",{withCredentials:true})

if(res){
  return res.data
}


  }catch(err){
    throw  err;
  }
}


