

import { createBrowserRouter } from "react-router"; 
import EmployeeForm from "../features/auth/pages/employeeregister";



export  const router=createBrowserRouter([

{
    path:"/employee/register",

    element:<EmployeeForm/>
},{
    path:"/"
    ,element:<h1>hello</h1>
}









]

)