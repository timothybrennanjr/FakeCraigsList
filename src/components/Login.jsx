import React from "react";
import { loginUser } from "../api-adapter";

const Login = (props) => {
    async function handleSubmit (event) {
      event.preventDefault()
      const username = null
      const password = null
      // console.log(username, password)
      const token = await loginUser(username, password)
      localStorage.removeItem("token")
      localStorage.setItem('token', token)
    }
  
  
    return (
      <div className="box">
          <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input id="usernameLogin" type="text" required />
              <label htmlFor="password">Password:</label>
              <input id="loginPassword" type="password" required />
              <button type="submit">Submit</button>
          </form>
      </div>
    )
  };
  
  
  
  
  export default Login;


