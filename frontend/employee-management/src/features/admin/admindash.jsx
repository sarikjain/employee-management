
import "../admin/admindash.css";
import { adminlogout, deleteemployee, getalladmins, getallemployees } from "../auth/auth.api";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { useauth } from "../auth/hooks/auth.hooks";
import { useNavigate } from "react-router";
const AdminDashboard = () => {
const {setemployee}=useauth()
const navigate=useNavigate()
const handledelete=async(id)=>{
const res=await deleteemployee(id);
if(res){
 setemployees(
         employees.filter(
            (employee) => employee._id !== id
         )
      );
}
}
const viewdetails=async(employee)=>{

setemployee(employee);
navigate("/employee/profile");


}
const Addemployee=()=>{
  navigate("/employee/register");
}
const handleadminprofile=()=>{
  navigate("/adminprofile")
}
const {setadmin}=useauth()
const handlelogout=async()=>{

  const res=await adminlogout();
  if(res){
    setadmin(null)
    navigate("/admin/login")
  }
}
   
const [employees, setemployees] = useState([]);
const[count,setcount]=useState(0);
const[admcount,setadmcount]=useState(0);

  useEffect(() => {

    const fetchallemployees = async () => {

      try {

        const response = await getallemployees();

        setemployees(response);
        let Total=0;
        for(var i=0;i<response.length;i++){
if(response[i].workathome==true){
    Total++;
    
  }
}
setcount(Total);


      } catch (err) {
       throw err;
      }

    };
    

    fetchallemployees();
   const fetchalladmins=async()=>{
try{
const res=await getalladmins();
if(res){
  setadmcount(res.length);
}
}catch(err){
  throw err;
}
   }
   fetchalladmins();

  }, []);

  return (
    <div className="dashboard-container">

    

      <div className="sidebar">
        <h2 className="logo">Admin Panel</h2>

        <ul className="menu">
          <li>Dashboard</li>
          <li>Admins</li>
          <li>View Employees</li>
          <li>Add Employee</li>
          <li onClick={handleadminprofile}>Admin Profile</li>
         <li  onClick={()=>handlelogout()}className="logout">Logout</li>
        </ul>
      </div>

      {/* Main Content */}

      <div className="main-content">

        {/* Top Navbar */}

        <div className="topbar">
          <h1>Admin Dashboard</h1>

          <div className="admin-profile">
            <div className="admin-avatar">A</div>

            <div>
              <h3>Admin</h3>
              <p>admin@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}

        <div className="cards">

          <div className="card">
            <h2>Total Employees</h2>
            <p>{employees.length}</p>
          </div>

          <div className="card">
            <h2>Total Admins</h2>
            <p>{admcount}</p>
          </div>

          <div className="card">
            <h2>Work From Home</h2>
            <p>{count}</p>
          </div>

        </div>

        {/* Employee Section */}

        <div className="employee-section">

          <div className="section-header">
            <h2>Employees List</h2>

            <button id="addemployeebutton" onClick={()=>Addemployee()} className="add-btn">
              + Add New Employee
            </button>
          </div>

          <div className="employee-grid">

            {employees.map((employee) => (
              <div className="employee-card" key={employee._id}>

                <div className="employee-top">
                  <div className="employee-avatar">
                    {employee.username.charAt(0)}
                  </div>

                  <div>
                    <h3>{employee.username}</h3>
                    <p>{employee.email}</p>
                  </div>
                </div>

               

                <div className="employee-actions">

                  <button onClick={()=>viewdetails(employee)}className="view-btn">
                    View Details
                  </button>

                  <button className="edit-btn">
                    Edit
                  </button>

                  <button onClick={()=>handledelete(employee._id)}className="delete-btn">
                    Delete
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;