import React, { useState } from "react";
import "../pages/employeeregister.css";
import { useauth } from "../hooks/auth.hooks";
import { useNavigate } from "react-router";

const AdminForm = () => {

  const Navigate = useNavigate()

  const { loading, handleadminregister } = useauth()

  const [servererror, setservererror] = useState("")

  const [formData, setFormData] = useState({
    username: "",
    salary: "",
    age: "",
    email: "",
    password: "",
    workathome: false,
    location: "",
    attendance: "",
  });

  const [errors, seterrors] = useState({})

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const newerrors = {}

    if (!formData.username.trim()) {
      newerrors.username = "Username required"
    }

    if (!formData.email.trim()) {
      newerrors.email = "Email required"
    }

    if (!formData.password.trim()) {
      newerrors.password = "Password required"
    }

    if (!formData.location.trim()) {
      newerrors.location = "Location required"
    }

    if (!formData.salary) {
      newerrors.salary = "Salary required"
    }

    if (!formData.age) {
      newerrors.age = "Age required"
    }

    if (!formData.attendance) {
      newerrors.attendance = "Attendance required"
    }

    if (Object.keys(newerrors).length > 0) {

      seterrors(newerrors)

      return
    }

    seterrors({})

    try {

      setservererror("")

      const res = await handleadminregister(formData)

      if (res) {
        Navigate("/admindash")
      }

    }
    catch (err) {

      setservererror(
        err.response?.data?.message ||
        "Something went wrong"
      )
    }
  };

  if (loading) {
    return (
      <main>
        <h1>Loading........</h1>
      </main>
    )
  }

  return (
    <div className="employee-page">

      <div className="overlay"></div>

      <form className="employee-form" onSubmit={handleSubmit}>

        <h1>Admin Registration</h1>

        <p className="subtitle">
          Create and manage Admin records beautifully
        </p>

        <div className="input-group">

          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />

          <p className="error">
            {errors.username}
          </p>

        </div>

        <div className="input-group">

          <input
            type="number"
            name="salary"
            placeholder="Salary"
            onChange={handleChange}
          />

          <p className="error">
            {errors.salary}
          </p>

        </div>

        <div className="input-group">

          <input
            type="number"
            name="age"
            placeholder="Age"
            onChange={handleChange}
          />

          <p className="error">
            {errors.age}
          </p>

        </div>

        <div className="input-group">

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <p className="error">
            {errors.email}
          </p>

        </div>

        <div className="input-group">

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <p className="error">
            {errors.password}
          </p>

        </div>

        <div className="input-group">

          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
          />

          <p className="error">
            {errors.location}
          </p>

        </div>

        <div className="input-group">

          <input
            type="number"
            name="attendance"
            placeholder="Attendance %"
            onChange={handleChange}
          />

          <p className="error">
            {errors.attendance}
          </p>

        </div>

        <div className="checkbox-group">

          <label>

            <input
              type="checkbox"
              name="workathome"
              checked={formData.workathome}
              onChange={handleChange}
            />

            Work From Home

          </label>

        </div>

        <p className="error">
          {servererror}
        </p>

        <button type="submit">

          {
            loading
              ?
              "Loading..."
              :
              "Add Admin"
          }

        </button>

      </form>

    </div>
  );
};

export default AdminForm;