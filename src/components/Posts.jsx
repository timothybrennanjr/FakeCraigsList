import React, { useState, useEffect } from "react";
import { getPosts } from "../api-adapter";
import { SinglePost } from "./";
import { useParams, Outlet } from "react-router-dom";

const Posts = (props) => {
  const posts = props.posts;
  return (
    <div id="posts">
      {posts.map(({ title, price, description, _id, author, location }) => {
        console.log(title, price, description, _id, author, location);
        return (
          <div key={_id} className="postPreview">
            <div>{title}</div>
            <div>Item Description {description}</div>
            <div>Price: {price}</div>
            <div>Seller:{author.username}</div>
            <div>Location:{location}</div>
            {posts.length ? (
              posts.map((post) => {
                return <SinglePost key={`post-id-${post._id}`} post={post} />;
              })
            ) : (
              <div>Loading Posts</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
