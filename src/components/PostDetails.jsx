import React from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { updatePost } from "../api-adapter"
import { useState, useEffect } from "react"

const PostDetails = (props) => {
    const {id} = useParams()
    const post = props.filterPost(id)[0];
    const [formDetails, setFormDetails] = useState({
        title: '',
        description: '',
        price: '',
        location: '',
    })

    useEffect(() => {
        setFormDetails(
            {
                title: post.title,
                description: post.description,
                price: post.price,
                location: post.location,
            })
        },[])

        function handleChange(e) {
            e.preventDefault()
            const toUpdate = e.target.id
            const update = e.target.value
            const updatedForm = {...formDetails, [toUpdate]: update }
            setFormDetails(updatedForm)
        }
        async function handleDelete(e){
            e.preventDefault()
            const toDelete = e.target.id
            const token = localStorage.getItem('token')
            const deleted = await deletePost(toDelete, token)
            console.log(deleted)
        }
        async function handleSubmit(e) {
            e.preventDefault()
            console.log('submitted')
            const updatedPost = await updatePost(formDetails, post._id, localStorage.getItem('token'))
            console.log(updatedPost)
        }



    
    return (
        <div className="post-details box">
            <div>{post.title}</div>
            <div>{post.description}</div>
            <div>{post.price}</div>
            <div>{post.author.username}</div>
            <div>{post.location}</div>
            <Link to ={"/posts"}><button>Go to Posts</button></Link>
                <div className='box'>
                    <form onChange={handleChange} onSubmit={handleSubmit}>
                        <input id='title' defaultValue={formDetails.title}/>
                        <input id='description' defaultValue={formDetails.description}/>
                        <input id='price' defaultValue={formDetails.price}/>
                        <input id='location' defaultValue={formDetails.location}/>
                        <button type='submit'>Submit</button>
                    </form>
                </div>
        </div>
        
    )
}

export default PostDetails;