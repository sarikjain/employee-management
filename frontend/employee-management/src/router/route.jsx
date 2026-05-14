import React, { lazy, Suspense } from "react";

import { createBrowserRouter } from "react-router"

const EmployeeForm = lazy(() =>
  import("../features/auth/pages/employeeregister")
);

const Login = lazy(() =>
  import("../features/auth/pages/employeelogin")
);

const EmployeeProfile = lazy(() =>
  import("../features/employee/employeeprofile")
);

const AdminForm = lazy(() =>
  import("../features/auth/pages/adminregister")
);

const AdminLogin = lazy(() =>
  import("../features/auth/pages/adminlogin")
);

const ProtectedRoute = lazy(() =>
  import("../components/protected_component")
);
const AdminDashboard = lazy(() =>
  import("../features/admin/admindash")
);
const Protected_component2=lazy(()=>import("../components/protected2_component")
)
const Adminprofile=lazy(()=>import("../features/admin/adminprofile")
)
export const router = createBrowserRouter([

  {
    path: "/employee/register",

    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <EmployeeForm />
      </Suspense>
    )
  },

  {
    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <ProtectedRoute />
      </Suspense>
    ),

    children: [
      {
        path: "/employee/profile",

        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <EmployeeProfile />
          </Suspense>
        )
      }
    ]
  },

  {
    path: "/employee/login",

    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <Login />
      </Suspense>
    )
  },

  {
    element:(<Suspense fallback={<h1>Loading......</h1>}><Protected_component2/>
    </Suspense>),
    children:[{
    path: "/admindash",

    element: (
    <Suspense fallback={<h1>Loading...</h1>}
    ><AdminDashboard/></Suspense>)}
]},

  {
    path: "/admin/register",

    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <AdminForm />
      </Suspense>
    )
  },

  {
    path: "/admin/login",

    element: (
      <Suspense fallback={<h1>Loading...</h1>}>
        <AdminLogin />
      </Suspense>
    )
  },
   {
    element:(<Suspense fallback={<h1>Loading......</h1>}><Protected_component2/>
    </Suspense>),
    children:[{
    path: "/adminprofile",

    element: (
    <Suspense fallback={<h1>Loading...</h1>}
    ><Adminprofile/></Suspense>)}
]},

]);