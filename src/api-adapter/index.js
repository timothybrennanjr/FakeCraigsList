const BASE_URL = "https://strangers-things.herokuapp.com";
const COHORT = "2209-FTB-ET-WEB-FT";

export async function getPosts() {
  const response = await fetch(`${BASE_URL}/api/${COHORT}/posts`);
  const result = await response.json();
  const postResult = result.data.posts;
  return postResult;
}

export async function getMessages(token, id, post) {
  console.log(token);
  const messageOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getTokenFromLocal}`,
    },
    body: JSON.stringify({
      message: {
        content: "Ed is amazing",
      },
    }),
  };

  const response = await fetch(
    `${BASE_URL}/api/${COHORT}/posts/${id}/messages`,
    messageOptions
  );
  const result = await response.json();
  console.log(result);
  return result;
}

export async function createMessage(message, id) {
  const createMessageOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getTokenFromLocal}`,
    },
    body: JSON.stringify({
      post: {
        message,
      },
    }),
  };
  console.log(createMessageOptions)
  const response = await fetch(
    `${BASE_URL}/api/${COHORT}/posts/${id}/message`,
    /* changed to message from messages, which removed error code 401 */
    createMessageOptions
  );
  const result = await response.json();
  console.log(result);
  return result/*.data.token*/;//removed to clear null properties message.
}

export async function registerUser(username, password) {
  const registerOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  };

  const response = await fetch(
    `${BASE_URL}/api/${COHORT}/users/register`,
    registerOptions
  );
  const result = await response.json();
  console.log(result);
  return result.data.token;
}

export async function loginUser(username, password) {
  const loginOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  };
  const response = await fetch(
    `${BASE_URL}/api/${COHORT}/users/login`,
    loginOptions
  );
  const result = await response.json();
  console.log(result);
  return result.data.token;
}

const getTokenFromLocal = localStorage.getItem("token");

export async function createPost(title, description, price) {
  const createPostOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getTokenFromLocal}`,
    },
    body: JSON.stringify({
      post: {
        title,
        description,
        price,
        //add will deliver later
      },
    }),
  };
  console.log(createPostOptions);
  const response = await fetch(
    `${BASE_URL}/api/${COHORT}/posts`,
    createPostOptions
  );
  const result = await response.json();
  console.log(result);
  return result.data.token;
}

export async function updatePost(post, id, token) {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      post,
    }),
  };
  const response = await fetch(
    `${BASE_URL}/api/${COHORT}/posts/${id}`,
    options
  );
  const result = await response.json();
  return result;
}

export async function deletePost(id, token) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(
    `${BASE_URL}/api/${COHORT}/posts/${id}`,
    options
  );
  const result = await response.json();
  return result;
}
