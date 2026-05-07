const {body}=require("express-validator")



const loginvalidator=[
body("password").isLength({min:6}).withMessage("password should be atleast of 6 characters")


]   


const registervalidator=[
body("password").isLength({min:6}).withMessage("password should be atleast of 6 characters"),
body("email").isEmail().withMessage("Invalid Email"),
body("username").isLength({min:6}).withMessage("Username should be atleast of 6 characters")

]   







module.exports={loginvalidator,registervalidator}