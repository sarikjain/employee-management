
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const employeemodel=require("../modals/employee.modal")
const adminmodel = require("../modals/admin.model")




async function adminregister(req,res){
const {username,email,age,salary,workathome,password,attendance,location}=req.body



try{
const hashed=await bcrypt.hash(password,10)
const admin=await adminmodel.create({
    username:username,
    email:email,
    age:age,
    salary:salary,
    workathome:workathome,
    password:hashed,
    attendance:attendance,
    location:location
})

const token=jwt.sign({
id:admin._id    
},process.env.jwt_secrets)


res.cookie("admintoken",token,{
    httpOnly: true,
    sameSite: "Strict",
})
res.status(201).json({
    message:"admin has been registered",
    admin:{
        username:username,
    email:email,
    age:age,
    salary:salary,
    workathome:workathome,
    
    attendance:attendance,
    location:location,
    id:admin._id
    }
})
}
catch(err){

    console.log(err);
    return res.status(500).json({
        message: "Internal server error",
        error: err.message
    });

}

}



async function adminlogin(req,res){
    const {username,password}=req.body



try{

const admin=await adminmodel.findOne({
  username
})
if(!admin){
    return res.status(400).json({
        message:"No admin exist"
    })
}
 const ispasswordcorrect = await bcrypt.compare(password, admin.password);

    if (!ispasswordcorrect) {
      return res.status(400).json({
        message: "Wrong password"
      });
    }
const token=jwt.sign({
    id:admin._id
},process.env.jwt_secrets)


res.cookie("admintoken",token,{
      httpOnly: true,
    sameSite: "Strict",
})
res.status(200).json({
    message:"admin has been logined",
    admin:{
        username:admin.username,
    email:admin.email,
    age:admin.age,
    salary:admin.salary,
    workathome:admin.workathome,
    
    attendance:admin.attendance,
    location:admin.location,
    id:admin._id
    }
})
}
catch(err){
     console.log(err);
    return res.status(500).json({
        message: "Internal server error",
        error: err.message
    });
}

}
async function adminlogout(req,res){
const token=req.cookies.token
 res.clearCookie("admintoken")
 res.status(200).json({
        message:"admin logged out succesfully"
    })
}
async function employeeregister(req,res){
const {username,email,age,salary,workathome,password,attendance,location}=req.body



try{
const hashed=await bcrypt.hash(password,10)
const employee=await employeemodel.create({
    username:username,
    email:email,
    age:age,
    salary:salary,
    workathome:workathome,
    password:hashed,
    attendance:attendance,
    location:location
    
})

const token=jwt.sign({
    id:employee._id
},process.env.jwt_secrets)


res.cookie("employeetoken",token,{
    httpOnly: true,
    sameSite: "Lax",
})
res.status(201).json({
    message:"employee has been registered",
    employee:{
        username:username,
    email:email,
    age:age,
    salary:salary,
    workathome:workathome,
    
    attendance:attendance,
    location:location,
    id:employee._id
    }
})
}
catch(err){  console.log(err);
    return res.status(500).json({
        message: "Internal server error",
        error: err.message
    });
}

}



async function employeelogin(req,res){
    const {username,password}=req.body



try{

const employee=await employeemodel.findOne({
  username
})
if(!employee){
    return res.status(400).json({
        message:"No employee exist"
    })
}
 const ispasswordcorrect = await bcrypt.compare(password, employee.password);

    if (!ispasswordcorrect) {
      return res.status(400).json({
        message: "Wrong password"
      });
    }
const token=jwt.sign({
   id:employee._id
},process.env.jwt_secrets)


res.cookie("employeetoken",token,{
      httpOnly: true,
    sameSite: "Strict",
})
res.status(200).json({
    message:"employee has been logined",
    employee:{
        username:employee.username,
    email:employee.email,
    age:employee.age,
    salary:employee.salary,
    workathome:employee.workathome,
    
    attendance:employee.attendance,
    location:employee.location,
    id:employee._id
    }
})
}
catch(err){
      console.log(err);
    return res.status(500).json({
        message: "Internal server error",
        error: err.message
    });
}

}
async function employeelogout(req,res){
const token=req.cookies.token
 res.clearCookie("employeetoken")
 res.status(200).json({
        message:"employee logged out succesfully"
    })
}
 
async function getalladmins(){

try{

    const admins=await adminmodel.find({})
    return admins;
}catch(err){
       console.log(err.message);
   
}
}
async function getallemployees(){
  try{

    const employees=await employeemodel.find({})
    return employees;
}catch(err){
       console.log(err.message);
   
}  
}
async function getemployee(req,res){
    try{
const token=req.cookies.employeetoken
const content=await jwt.verify(token,process.env.jwt_secrets)
const id=content.id
const employee=await employeemodel.findOne({_id:id})
return res.status(200).json({
      message: "Employee fetched successfully",
      employee: {
        id: employee._id,
        username: employee.username,
        email: employee.email,
        age: employee.age,
        salary: employee.salary,
        workathome: employee.workathome,
        attendance: employee.attendance,
        location: employee.location
      }
    })

  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "Internal server error"
    });
}}
async function getadmin(req,res){
    try{
const token=req.cookies.admintoken
const content=await jwt.verify(token,process.env.jwt_secrets)
const id=content.id
const admin=await adminmodel.findOne({_id:id})
return res.status(200).json({
      message: "admin fetched successfully",
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        age: admin.age,
        salary: admin.salary,
        workathome: admin.workathome,
        attendance: admin.attendance,
        location: admin.location
      }
    })

  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      message: "Internal server error"
    });
}}


module.exports={employeeregister,employeelogin,employeelogout,adminlogin,adminlogout,adminregister,getadmin,getalladmins,getallemployees,getemployee}