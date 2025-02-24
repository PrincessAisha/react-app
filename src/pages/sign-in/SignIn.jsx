import React from "react";
import "./SignIn.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    const error = {};
    if (!username) {
      error.username = "Username is required";
    }
    if (!password) {
      error.password = "Password is required";
    } else if (password.length < 8) {
      error.password = "Password must be at least 8 characters";
    }
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();
    setError(error);
    if (Object.keys(error).length === 0) {
      if (username === "admin" && password === "admin123") {
        navigate("/"); // Navigate to home page if valid credentials
      } else {
        setError({ username: "Invalid username or password" }); // Display error message for invalid login
      }
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          value={username}
          name="Username"
          placeholder="Enter Your Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        {error.username && <div style={{ color: 'red' }}>{error.username}</div>}
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          value={password}
          name="Password"
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password && <div style={{ color: 'red' }}>{error.password}</div>}
  
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default SignIn;
