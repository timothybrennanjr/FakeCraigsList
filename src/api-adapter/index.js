const BASE_URL = "https://strangers-things.herokuapp.com";
const COHORT = "2209-FTB-ET-WEB-FT";

export async function getPosts() {
  const response = await fetch(`${BASE_URL}/api/${COHORT}/posts`);
  const result = await response.json();
  const postResult = result.data.posts;
  return postResult;
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
  console.log(result)
  return result.data.token 
  
  
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
  console.log(result)
  return result.data.token;
}
