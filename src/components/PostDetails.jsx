import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { updatePost, deletePost } from "../api-adapter";
import { useState, useEffect } from "react";

const PostDetails = (props) => {
  const { id } = useParams();
  const post = props.filterPost(id)[0];
  const [formDetails, setFormDetails] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
  });

  useEffect(() => {
    setFormDetails({
      title: post.title,
      description: post.description,
      price: post.price,
      location: post.location,
    });
  }, []);

  function handleChange(e) {
    e.preventDefault();
    const toUpdate = e.target.id;
    const update = e.target.value;
    const updatedForm = { ...formDetails, [toUpdate]: update };
    setFormDetails(updatedForm);
  }
  async function handleDelete(e) {
    e.preventDefault();
    const toDelete = e.target.id;
    const token = localStorage.getItem("token");
    const deleted = await deletePost(toDelete, token);
    console.log(deleted);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    const updatedPost = await updatePost(
      formDetails,
      post._id,
      localStorage.getItem("token")
    );
    console.log(updatedPost);
  }

  return (
    <>
    <div id="postDetailsMain">
      {post ? (
        <>
          <div className="singlePost">
            <div id="postDetails">
              <div>Title: {post.title}</div>
              <div>Description: {post.description}</div>
              <div>Price: {post.price}</div>
            

            <Link to={"/posts"}>
              <button>Go Back</button>
            </Link>
            </div>
          </div>
          <div className="postDetailsButtons">
            <form onChange={handleChange} onSubmit={handleSubmit} >
              <input id="title" defaultValue={formDetails.title} />
              <input id="description" defaultValue={formDetails.description} />
              <input id="price" defaultValue={formDetails.price} />
              <input id="location" defaultValue={formDetails.location} />
              <button type="submit">Submit</button>
            </form>
            <button className="deleteButton"
              id={post._id ? `${post._id}` : null}
              onClick={(e) => {
                handleDelete(e);
              }}
            >
              Delete Post
            </button>
          </div>
        </>
      ) : (
        <div>Loading your post details...</div>
      )}
      </div>
    </>
  );
};

export default PostDetails;
