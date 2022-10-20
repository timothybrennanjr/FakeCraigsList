import React, {useState, useEffect} from 'react';
import {getPosts} from '../api-adapter'
import {SinglePost} from './' 
import { useParams, Outlet } from 'react-router-dom';


const Posts = (props) => {
  const [posts, setPosts] = useState([]);
  const {id} = useParams()
  
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-ET-WEB-FT/posts');
      const postData = await response.json();
      setPosts(postData.data.posts);
    }
    fetchPosts()
  }, [])
  function filterPost () {
    return posts.filter ((post)=> {
      return post._id == id
    })
  }

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
            {id ? <Outlet context={filterPost()}/>:
            posts.length ? posts.map((post) => {
                return <SinglePost key={`post-id-${post._id}`} post={post}/>
            }) :<div>Loading your posts</div>
            }
          </div>
        ) 
        })
      }
        
       
      
    </div>
  );
};




export default Posts