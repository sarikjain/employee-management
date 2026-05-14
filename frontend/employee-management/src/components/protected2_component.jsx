import { Navigate, Outlet } from "react-router";
import { useauth } from "../features/auth/hooks/auth.hooks";

const ProtectedComponent2 = () => {

   const { loading, admin } = useauth();

   if(loading){
      return <h1>Loading.......</h1>
   }

   if(!admin){
      return <Navigate to="/admin/login" />
   }

   return <Outlet />
}

export default ProtectedComponent2;