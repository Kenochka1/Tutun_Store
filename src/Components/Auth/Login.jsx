import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import URL from "../../Config";
import "./Login.css";

const Login = () => {
  const [inpEmail, setEmail] = useState("");
  const [inpPassword, setPassword] = useState("");

  const navigate = useNavigate();
  const notify = (error) => {
    toast.error(Object.values(error).toString().replace(/,/gi, ""), {
      icon: false,
      theme: "dark",
    });
  };

  const registerUser = async (newUser) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" },
    };
    try {
      const res = await axios.post(`${URL}/account/login/`, newUser, config);
      const { access, refresh } = res.data;
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);
      navigate("/check-token");
    } catch (error) {
      notify(error.response.data);
    }
  };

  function handleClick() {
    const form_data = new FormData();
    if (!inpEmail) notify("Enter email");
    else if (!inpPassword) notify("Enter password");
    else {
      form_data.append("email", inpEmail);
      form_data.append("password", inpPassword);
      registerUser(form_data);
    }
  }

  return (
    <div className="container__login">
      <div className="card" style={{ width: "50vw" }}>
        <div className="card-body">
          <h2>Login</h2>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              key="email"
              placeholder="*Email"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              key="password"
              placeholder="*Password"
            />
          </div>
          <div className="container__login__button">
            <button
              onClick={handleClick}
              className="btn1"
              style={{ width: "50%" }}
            >
              Login
            </button>
            <NavLink to="/registration">
              <button
                onClick={handleClick}
                className="btn2"
                style={{ width: "50%" }}
              >
                "Don't have an account? Sign Up"
              </button>
            </NavLink>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
