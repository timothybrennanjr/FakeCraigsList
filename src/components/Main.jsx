import React, { useState, useEffect } from "react";
import {
  NavBar,
  Posts,
  Register,
  Login,
  CreatePost,
  SinglePost,
  PostDetails,
} from "./";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const Main = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route path="posts" element={<Posts />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="details" element={<PostDetails />} />
      </Route>
    )
  );

  return (
    <div id="main">
      <RouterProvider router={router} />
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
