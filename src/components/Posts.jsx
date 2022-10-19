import React, {useState, useEffect} from 'react';
import {getPosts} from '../api-adapter'


const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts');
      const postData = await response.json();
      // console.log(postData.data.posts)
      // console.log(postData)
      setPosts(postData.data.posts);
    }
    fetchPosts()
  }, [])
  return (
    <div id="posts">
      
        {
        posts.map(({title, price, description, _id, author, location}) => {
          console.log(title, price, description, _id, author, location)
        return(
         
          <div key={_id} className="postPreview">
            <div>{title}</div>
            <div>Item Description {description}</div>
            <div>Price: {price}</div>
            <div>Seller:{author.username}</div>
            <div>Location:{location}</div>
          </div>
        ) 
        })
      }
        
       
      
    </div>
  );
};




export default Posts