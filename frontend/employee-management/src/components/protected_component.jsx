

import { Navigate, Outlet } from "react-router";
import { useauth } from "../features/auth/hooks/auth.hooks";

const ProtectedRoute = () => {
  const { employee, loading } = useauth();

  if (loading) {
    return <main><h1>Loading...</h1></main>;
  }

  if (!employee) {
    return <Navigate to="/employee/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;