import React from "react";
import { loginUser } from "../api-adapter";

const Login = (props) => {
  async function handleLogin(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    console.log(username, password);
    const token = await loginUser(username, password);
    localStorage.removeItem("token");
    localStorage.setItem("token", token);
  }

  return (
    <div className="login-box">
      <h1 className="login-header">
        Login
        <form onSubmit={handleLogin} className="login-form">
          <input
            id="usernameLogin"
            type="text"
            placeholder="Username *"
            required
          />
          <input
            id="loginPassword"
            type="password"
            placeholder="Password *"
            required
          />
          <button type="submit" id="loginButton">
            Login
          </button>
        </form>
      </h1>
    </div>
  );
};

export default Login;
