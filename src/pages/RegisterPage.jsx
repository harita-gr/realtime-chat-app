import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useAuth } from "../utils/AuthContext";

const RegisterPage = () => {
  const { user, handleUserRegister } = useAuth();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="auth--container">
      <div className="form--wrapper">
        <form onSubmit={(e) => handleUserRegister(e, credentials)}>
          <div className="field--wrapper">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              value={credentials.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="field--wrapper">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              value={credentials.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="field--wrapper">
            <label>Password:</label>
            <input
              type="password"
              name="password1"
              placeholder="Enter your password"
              required
              value={credentials.password1}
              onChange={handleInputChange}
            />
          </div>

          <div className="field--wrapper">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="password2"
              placeholder="Confirm your password"
              required
              value={credentials.password2}
              onChange={handleInputChange}
            />
          </div>

          <div className="field--wrapper">
            <input
              className="btn btn-lg btn--main"
              type="submit"
              value="Register"
            />
          </div>
        </form>
        <p>
          Already have an account? Login <Link to="/login">here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
