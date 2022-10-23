import React, { useState, useEffect } from "react";
import {
  NavBar,
  Posts,
  Register,
  Login,
  CreatePost,
  SinglePost,
  PostDetails,
  Profile,
  Messages,
  CreateMessages
} from "./";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

//NEW
import { getUsers } from "../api-adapter";


const Main = () => {
  const [posts, setPosts] = useState([]);
  
//NEW
  const [userList, setUserList] = useState(null)

//NEW
  useEffect(() => {
    getUsers()
    .then(users => {
      setUserList(users)
    })
    .catch(error => {
      //add error message later
    })
  }, [])
  
  
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts');
      const postData = await response.json();
      setPosts(postData.data.posts);
    }
    fetchPosts()
  }, [])
  function filterPost (id) {
    return posts.filter ((post)=> {
      return post._id == id
    })
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route path="posts" element={<Posts posts={posts}/>} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="post/details/:id" element={<PostDetails filterPost={filterPost}/>} />
        <Route path="create-post" element={<CreatePost/>}/>
        <Route path="create-message" element={<CreateMessages/>}/>
        <Route path="profile" element={<Profile/>}/>
      </Route>
    )
  );

  return (
    <div id="main">
      <RouterProvider router={router} />
      
    </div>
  );
};

export default Main;
