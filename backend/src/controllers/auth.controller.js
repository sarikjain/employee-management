
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const employeemodel=require("../modals/employee.modal")




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
    username
},process.env.jwt_secrets)


res.cookie("token",token)
res.status(201).json({
    message:"employee has been registered",
    employee:{
        username:username,
    email:email,
    age:age,
    salary:salary,
    workathome:workathome,
    
    attendance:attendance,
    location:location
    }
})
}
catch(err){
    console.log(err)
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
    username
},process.env.jwt_secrets)


res.cookie("token",token)
res.status(200).json({
    message:"employee has been logined",
    employee:{
        username:employee.username,
    email:employee.email,
    age:employee.age,
    salary:employee.salary,
    workathome:employee.workathome,
    
    attendance:employee.attendance,
    location:employee.location
    }
})
}
catch(err){
    console.log(err)
}

}
async function employeelogout(req,res){
const token=req.cookies.token
 res.clearCookie("token")
 res.status(200).json({
        message:"employee logged out succesfully"
    })
}


module.exports={employeeregister,employeelogin,employeelogout}