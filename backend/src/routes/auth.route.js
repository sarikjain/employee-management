const express=require("express")
const authcontroller=require("../controllers/auth.controller")
const { registervalidator, loginvalidator } = require("../controllers/auth.validation")
const validationmiddleware = require("../middlewares/validation.middleware")
const adminmiddleware = require("../middlewares/admin.middleware")
const employeemiddleware = require("../middlewares/employee.middleware")


const router=express.Router()


router.post("/employee/register",registervalidator,validationmiddleware,authcontroller.employeeregister)
router.post("/employee/login",loginvalidator,validationmiddleware,authcontroller.employeelogin)
router.get("/employee/logout",authcontroller.employeelogout)

router.post("/admin/register",registervalidator,validationmiddleware,authcontroller.adminregister)
router.post("/admin/login",loginvalidator,validationmiddleware,authcontroller.adminlogin)
router.get("/admin/logout",authcontroller.adminlogout)
router.get("/alladmin/get",adminmiddleware,authcontroller.getalladmins)
router.get("/allemployees/get",adminmiddleware,authcontroller.getallemployees)
router.get("/employee/get",employeemiddleware,authcontroller.getemployee)
router.get("/admin/get",adminmiddleware,authcontroller.getadmin)
router.delete("/employee/delete",authcontroller.deleteemployee)




module.exports=router;