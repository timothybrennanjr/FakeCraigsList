import React from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'

const PostDetails = (props) => {
    const {id} = useParams()
    const post = props.filterPost(id)[0];
   
    return (
        <div className="post-details box">
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