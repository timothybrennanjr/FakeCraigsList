import React from "react";
import { Link } from "react-router-dom";
import { Messages } from "./";

const SinglePost = (props) => {
  const post = props.post;
  return (
    <div id="post-Details">
      {post.title}
      {post.description}
      {post.price}
      {post.author.username}
      {post.location}
      <Link to={`/post/details/${post._id}`}>
        <button>Post details</button>
      </Link>
      <Messages postId={post._id} />
    </div>
  );
};

export default SinglePost;
