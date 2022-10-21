import React, { useState, useEffect } from "react";
import { getPosts } from "../api-adapter";
import { SinglePost } from "./";
import { useParams, Outlet } from "react-router-dom";

const Posts = (props) => {
  const posts = props.posts;
  return (
    <div id="posts">
      {posts.length ? (
        posts.map((post) => {
          return <SinglePost key={`post-id-${post._id}`} post={post} />;
        })
      ) : (
        <div>Loading Posts</div>
      )}
    </div>
  );
};

export default Posts;
