const express=require("express")
const authcontroller=require("../controllers/auth.controller")


const router=express.Router()


router.post("/employee/register",authcontroller.employeeregister)
router.post("/employee/login",authcontroller.employeelogin)
router.get("/employee/logout",authcontroller.employeelogout)




module.exports=router;