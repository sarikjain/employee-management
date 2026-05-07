

import { createBrowserRouter } from "react-router"; 
import EmployeeForm from "../features/auth/pages/employeeregister";
import Login from "../features/auth/pages/employeelogin";



export  const router=createBrowserRouter([

{
    path:"/employee/register",

    element:<EmployeeForm/>
},{
    path:"/"
    ,element:<h1>hello</h1>
}
,
{
    path:"/employee/login"
    ,element:<Login/>
}








]

)