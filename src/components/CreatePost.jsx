// import React from "react";

// const CreatePost = (props) => {
//     async function handleSubmit (event) {
//       event.preventDefault()
//       const username= event.target[0].value
//       const password= event.target[1].value
//     //   console.log(username, password)
//       const token = await registerUser(username, password)
//       localStorage.removeItem("token")
//       localStorage.setItem('token', token)
//     }
//     return (
//       <div className="box">
//           <form onSubmit={handleSubmit}>
//               <label htmlFor="username">Username:</label>
//               <input id="username" type="text" required />
//               <label htmlFor="password">Password:</label>
//               <input id="password" type="password" required />
//               <button type="submit">Submit</button>
//           </form>
//       </div>
//     )
//   };

// export default CreatePost;