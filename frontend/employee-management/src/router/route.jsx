

import { createBrowserRouter } from "react-router"; 
import EmployeeForm from "../features/auth/pages/employeeregister";
import Login from "../features/auth/pages/employeelogin";
import EmployeeProfile from "../features/employee/employeeprofile";
import AdminForm from "../features/auth/pages/adminregister";
import AdminLogin from "../features/auth/pages/adminlogin";
import ProtectedRoute from "../components/protected_component";

export  const router=createBrowserRouter([

{
    path:"/employee/register",

    element:<EmployeeForm/>
},{
  
  element: <ProtectedRoute />,  // the gate
  children: [
    { path: "/employee/profile", element: <EmployeeProfile /> }
  ]

}
,
{
    path:"/employee/login"
    ,element:<Login/>
}
,
{
    path:"/",
    element:<h1>Hello</h1>
},
{
    path:"/admin/register"
    ,element:<AdminForm/>
}
,{
    path:"/admin/login",
    element:<AdminLogin/>
}






]

)