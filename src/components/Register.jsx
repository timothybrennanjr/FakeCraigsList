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
    <div className="box">
        <form onSubmit={handleRegister}>
            <label htmlFor="username">Username:</label>
            <input id="username" type="text" required />
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" required />
            <button type="submit">Register</button>
        </form>
    </div>
  )
};





export default Register;