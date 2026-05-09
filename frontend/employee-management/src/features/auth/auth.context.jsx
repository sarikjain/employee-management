import { createContext, useEffect, useState } from "react";
import { getadmin, getemployee } from "./auth.api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [employee, setemployee] = useState(null);
  const [admin, setadmin] = useState(null);
  const [loading, setloading] = useState(true);

useEffect(() => {
    const setinitialstate = async () => {
     
    try {
      const employeedata = await getemployee();

      if(employeedata){
        setemployee(employeedata.employee);
      }

    } catch(err) {
      setemployee(null);
    }

    try {
      const admindata = await getadmin();

      if(admindata){
        setadmin(admindata.admin);
      }

    } catch(err) {
      setadmin(null);
    }

    setloading(false);
      
      
    
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