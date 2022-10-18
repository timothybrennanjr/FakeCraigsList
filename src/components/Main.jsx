import React, { useState, useEffect} from "react";
import { NavBar, Posts, Register } from "./";


const Main = () => {
const [posts, setPosts] = useState([]);
// console.log('posts', posts)


useEffect(() => {
  const fetchPosts = async () => {
    const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts');
    const data = await response.json();
    // console.log(data.data.posts)
    setPosts(data.data.posts);
  }
  fetchPosts()
}, [])

  return (
    <div id="main">
      <div id="navbar">
         <NavBar/>
        <Register/>

      </div>
      <div id="container">
        {/* <>
        {
        posts.map(e => {
        return(
          <h2>{e.title}</h2>
        ) 
        })
      }
        </> */}
       
      </div>
    
      
    </div>
  );
};

export default Main;
