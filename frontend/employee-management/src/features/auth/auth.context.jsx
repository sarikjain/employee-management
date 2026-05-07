import { createContext, useEffect, useState } from "react";
import { getadmin, getemployee } from "./auth.api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [employee, setemployee] = useState(null);
  const [admin, setadmin] = useState(null);
  const [loading, setloading] = useState(true);

useEffect(() => {
    const setinitialstate = async () => {
      console.log("useEffect running") // add this
      try {
        const employee = await getemployee();
        const admin = await getadmin();
      
      } catch (err) {
       
        setemployee(null);
        setadmin(null);
      } finally {
      
        setloading(false);
      }
    };

    setinitialstate();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        employee,
        setemployee,
        admin,
        setadmin,
        loading,
        setloading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};