import React from "react";
import {createMessage} from "../api-adapter"

const CreateMessages = (props) => {
    async function handleCreateMessage (event) {
        event.preventDefault()
        const message = event.target[0].value
        const token = await createMessage(message)
        localStorage.removeItem("token")
      localStorage.setItem('token', token)

    }
    return (
        <div className = "box">
            <form onSubmit={handleCreateMessage}>
                <label htmlFor="message">Message:</label>
                <input id="messageForm" type="text" required />
                <button type="submit">Create Message</button>

            </form>
        </div>
    )
}



export default CreateMessages