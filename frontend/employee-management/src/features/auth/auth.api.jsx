import axios from "axios"

export async function employeelogin({username,password}){
 try{const res=await axios.post("http://localhost:3000/api/auth/employee/login",{username,password},{withCredentials:true})

if(res){
    return res.data;
}
 }
 catch(err){
    console.log(err.message)
 }
}

async function employeeregister({}){

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
    console.log(err.response?.data || err.message);
  }
}


export async function getemployee(){


    try{
        const res=await axios.get("http://localhost:3000/api/auth/employee/get",{withCredentials:true})
    return res.data}catch(err){
        console.log(err);
    }
}
export async function getadmin(){


    try{
        const res=await axios.get("http://localhost:3000/api/auth/admin/get",{withCredentials:true})
    return res.data}catch(err){
        console.log(err);
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
console.log(err.message)
  }
}

export async function adminlogin({username,password}){
try{
  const res=await axios.post("http://localhost:3000/api/auth/admin/login",{username,password},{withCredentials:true})
return res.data
}catch(err){
  console.log(err.message)
}
}



