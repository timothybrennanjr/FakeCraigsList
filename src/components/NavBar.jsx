import React from "react";
import {Outlet, NavLink} from "react-router-dom"

const NavBar = () => {
  return (<>
    <div id="navbar">
      <h2 id="navTitle"> Dank Craigslist</h2>
      <div className="nav">
      <NavLink className="navButtons" to="/posts">Posts</NavLink>
      <NavLink className="navButtons" to="/login">Login</NavLink>
      <NavLink className="navButtons" to="/register">Register</NavLink>
      </div>
    </div>
      <Outlet/></>
  );
};

export default NavBar;