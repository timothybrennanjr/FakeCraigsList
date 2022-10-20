import React, { useState, useEffect } from "react";
import { NavBar, Posts, Register, Login, CreatePost } from "./";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";



const Main = () => {

  return (
    <div id="main">

      {/* <RouterProvider router={router}> */} 
        {/* <div id="navbar"> */}
          {/* <NavBar />
          <Register />
          <Login />
        </div>
        <div id="container">
          <Posts />
          <CreatePost />
        </div>  */}
      {/* </RouterProvider> */}
    </div>
  );
};

export default Main;
