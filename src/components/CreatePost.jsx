import React from "react";
import { createPost } from "../api-adapter"

const CreatePost = (props) => {
    async function handleCreatePost (event) {
      event.preventDefault()
      const title = event.target[0].value
      const description = event.target[1].value
      const price = event.target[2].value
    //   console.log(username, password)
      const token = await createPost(title, description, price)
      localStorage.removeItem("token")
      localStorage.setItem('token', token)
    }
    return (
      <div className="box">
          <form onSubmit={handleCreatePost}>
              <label htmlFor="title">Title:</label>
              <input id="postTitle" type="text" required />
              <label htmlFor="description">Description</label>
              <input id="postDescription" type="text" required />
              <label htmlFor="price">Price:</label>
              <input id="postPrice" type="text" required />

              <label htmlFor="willDeliver">Will Deliver?</label>
                {/* { post.WillDeliver ? (
                  <input type="checkbox" id="willDeliver" checked />
              ) : ? need to add something here, have this operate off of state change stuff
              } */}

              <button type="submit">Create Post</button>
          </form>
      </div>
    )
  };

  
export default CreatePost;