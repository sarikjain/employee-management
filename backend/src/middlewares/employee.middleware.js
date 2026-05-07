
const jwt=require("jsonwebtoken")
const employeemodel=require("../modals/employee.modal")


async function employeemiddleware(req,res,next){

try{

const token=req.cookies.token
if(!token){
    return res.status(400).json({
        message:"No token alloted"
    })
}
const decoded= jwt.verify(token,process.env.jwt_secrets)
const employee=await employeemodel.findOne({_id:decoded.id})
if(!employee){
    return res.status(400).json({
        message:"No employee identified"
    })
}
req.employee=employee
next();

}catch(err){
return res.status(403).json({
    message:"Unauthorized person"
})
}


}


module.exports=employeemiddleware;