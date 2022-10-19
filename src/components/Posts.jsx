import React, {useState, useEffect} from 'react';
import {getPosts} from '../api-adapter'


const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts');
      const postData = await response.json();
      console.log(postData.data.posts)
      console.log(postData)
      setPosts(postData.data.posts);
    }
    fetchPosts()
  }, [])
  return (
    <div id="posts">
      
        {
        posts.map(({title, price, description, _id}) => {
          console.log(title, price, description, _id)
        return(
          <div key={_id} className="posts">
            <div>{title}</div>
            <div>{price}</div>
            <div>{description}</div>
          </div>
        ) 
        })
      }
        
       
      
    </div>
  );
};




export default Posts