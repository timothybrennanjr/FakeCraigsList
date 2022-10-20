import React from "react";
import ReactDOM from "react-dom/client";
import { Main, NavBar, Posts, Register } from "./components";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="home" element={<Main />} />
      <Route path="posts" element={<Posts />} />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
