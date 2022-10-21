import React from 'react'
import {registerUser} from '../api-adapter'


const Register = (props) => {
  async function handleRegister (event) {
    event.preventDefault()
    const username= event.target[0].value
    const password= event.target[1].value
    const token = await registerUser(username, password)
    localStorage.removeItem("token")
    localStorage.setItem('token', token)
  }


  return (
    
    <div className="register-box">
        {/* <h1 className="register-header">Register */}
        <form onSubmit={handleRegister} className="register-form">
            
            {/* <label htmlFor="username">Username:</label> */}
            <input id="usernameRegister" type="text" placeholder="Username *" required />
            {/* <label htmlFor="password">Password:</label> */}
            <input id="registerPassword" type="password" placeholder="Password *" required />
            <button type="submit" id="registerButton">Register</button>
        </form>
        {/* </h1> */}
    </div>
  )
};





export default Register;