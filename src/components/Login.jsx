import React from "react";
import { loginUser } from "../api-adapter";

const Login = (props) => {
    async function handleLogin (event) {
      event.preventDefault()
      const username = event.target[0].value
      const password = event.target[1].value
      console.log(username, password)
      const token = await loginUser(username, password)
      localStorage.removeItem("token")
      localStorage.setItem('token', token)
    }
  
  
    return (
      <div className="login-box">
        
          <form onSubmit={handleLogin} className="login-form">
              {/* <label htmlFor="username">Username:</label> */}
              <input id="usernameLogin" type="text" placeholder="Username *" required />
              {/* <label htmlFor="password">Password:</label> */}
              <input id="loginPassword" type="password" placeholder="Password *" required />
              <button type="submit" id="loginButton">Login</button>
          </form>
      </div>
    )
  };
  
  
  
  
  export default Login;


