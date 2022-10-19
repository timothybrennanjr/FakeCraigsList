import React, {useState, useEffect} from 'react';
import {getPosts} from '../api-adapter'


const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts');
      const data = await response.json();
      console.log(data.data.posts)
      setPosts(data.data.posts);
    }
    fetchPosts()
  }, [])
  return (
    <div id="posts">
      
        {
        posts.map(e => {
        return(
          <div key={`posts-${posts._id}`} className="posts">
            <div>{posts.price}</div>
          </div>
        ) 
        })
      }
        
       
      
    </div>
  );
};




export default Posts