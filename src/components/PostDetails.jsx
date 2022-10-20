import React from 'react'
import {Link} from 'react-router-dom'

const PostDetails = (props) => {
    const post = props.post;
    return (
        <div className="single-post box">
            <div>{post.title}</div>
            <div>{post.description}</div>
            <div>{post.price}</div>
            <div>{post.author.username}</div>
            <div>{post.location}</div>
            <Link to ={`/post/details/${post._id}`}><button>Post details</button></Link>
        </div>
    )
}

export default PostDetails;