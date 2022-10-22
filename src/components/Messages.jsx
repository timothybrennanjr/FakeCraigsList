import React, { useEffect } from "react";
import { getMessages } from "../api-adapter";

const Messages = (props) => {
  const postId = props.postId;

  async function fetchMessage() {
    try {
      const token = localStorage.getItem("token");
      const messages = await getMessages(token, postId);
      console.log(messages);
    } catch (error) {
      console.log(error);
    }
  }

  return <h2>Hello Messages</h2>;
};

export default Messages;
