
const jwt=require("jsonwebtoken")
const employeemodel=require("../modals/employee.modal")
const adminmodel = require("../modals/admin.model") // ← fix this line


async function adminmiddleware(req,res,next){


try{

const token=req.cookies.admintoken
if(!token){
    return res.status(400).json({
        message:"No token alloted"
    })
}
const decoded= jwt.verify(token,process.env.jwt_secrets)
const admin=await adminmodel.findOne({_id:decoded.id})
if(!admin){
    return res.status(400).json({
        message:"No admin identified"
    })
}
req.admin=admin
next();

}catch(err){
return res.status(403).json({
    message:"Unauthorized person"
})
}


}


module.exports=adminmiddleware;