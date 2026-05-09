import React from "react";
import "../pages/employeelogin.css";
import { useState } from "react";
import { Link } from "react-router";
import { useauth } from "../hooks/auth.hooks";
import { useNavigate } from "react-router";

const AdminLogin = () => {

    const navigate = useNavigate()

    const { loading, handleadminlogin } = useauth()

    const [password, setpassword] = useState("")
    const [username, setusername] = useState("")

    const [errors, seterrors] = useState({})
    const [servererror, setservererror] = useState("")

    const handlesubmit = async () => {

        const newerrors = {}

        if (!username.trim()) {
            newerrors.username = "Username required"
        }

        if (!password.trim()) {
            newerrors.password = "Password required"
        }

        if (Object.keys(newerrors).length > 0) {

            seterrors(newerrors)

            return
        }

        seterrors({})

        try {

            setservererror("")

            const res = await handleadminlogin({
                username,
                password
            })

            if (res) {
                navigate("/")
            }

        }
        catch (err) {

            setservererror(
                err.response?.data?.message ||
                "Something went wrong"
            )
        }
    }

    if (loading) {
        return (
            <main>
                <h1>hello</h1>
            </main>
        )
    }

    return (
        <div className="container">

            <div className="login-box">

                <h1>Welcome Back</h1>

                <p className="subtitle">
                    Login to continue
                </p>

                <form>

                    <div className="input-group">

                        <label>Username</label>

                        <input
                            onChange={(e) => {
                                setusername(e.target.value)
                            }}
                            type="text"
                            placeholder="Enter your username"
                        />

                        <p className="error">
                            {errors.username}
                        </p>

                    </div>

                    <div className="input-group">

                        <label>Password</label>

                        <input
                            onChange={(e) => {
                                setpassword(e.target.value)
                            }}
                            type="password"
                            placeholder="Enter your password"
                        />

                        <p className="error">
                            {errors.password}
                        </p>

                    </div>

                    <p className="error">
                        {servererror}
                    </p>

                    <button
                        onClick={handlesubmit}
                        type="button"
                    >
                        {
                            loading
                                ?
                                "Loading..."
                                :
                                "Login"
                        }
                    </button>

                </form>

                <p className="footer-text">

                    Don’t have an account?

                    <Link to={"/admin/register"}>
                        <span>Sign Up</span>
                    </Link>

                </p>

            </div>

        </div>
    );
};

export default AdminLogin;