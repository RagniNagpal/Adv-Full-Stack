// import React, { useEffect, useState } from "react";
// import axios from 'axios'

// const App = () => {
//   let [users,setUsers]=useState([{id:1,name:"Saloni",age:21},{id:2,name:"SD",age:22}]);
//   async function getUsers(){
//     //send request to server and get users==> axios
//     try{
//       let response=await axios.get("https://jsonplaceholder.typicode.com/users");
//       // console.log(response);
//       let userData=response.data;
//       console.log(userData)
//       setUsers(userData);
//     }catch(error){
//       console.log(error.message);
//     }

//   }
//   useEffect(()=>{
//     getUsers(); //hum kbhi bhi useEffect ke callback ko kbhi async nhi bnana kyunki voh promise return krta h or useEffect hmesha clean up code return krta h islie error aayega agr async bna denge tohh
//   },[])
//   return (
//     <div>
//       <h1>Axios</h1>
//       <h2> user list</h2>
//       <ul>
//         {/* <li className="user">Name 2</li>
//         <li className="user">Name 2</li>
//         <li className="user">Name 3</li>
//         <li className="user">Name 4</li> */}
//         {users.map((user)=>{
//           return <li className="user">{user.name}</li>
//         })}
//       </ul>
//     </div>
//   )
// }

// export default App



//================CONDITIONAL RENDERING====================
// import React from 'react'

// const App = () => {
//   let age=18;
//   // function check(age){   //we cannot write if else in jsx so we make a another function in js and then call it but it is very lengthy so we use ternary operator
//   //   if(age>=18) return <h2>Allowed to vote</h2>
//   //   else return <h2>Not allowed to vote</h2>
//   // }
//   //there are three methods to use o=conditional rendering function , ternary operation and short circuiting(|| and &&)
//   return (
//     <div>
//       <h1>Conditional Rendering</h1>
//       {/* {check(15)} */}
//       {/* {age>=18?<h2>Allowed to vote</h2>:<h2>not allowed to vote</h2>} */}

//       {age>=18 && <h2> allowed to vote</h2>}
//     </div>
//   )
// }

// export default App



import React, { useState } from 'react'

const App = () => {
  const [number,setNumber]=useState(null);
  function generateNumber(){
    let num=Math.floor(Math.random()*10);
    setNumber(num);
  }
  return (
    <div>
      <h1> random number</h1>
      <button onClick={generateNumber}> random</button>
      <h2>{number}</h2>
      {number && (number==7?<div><h2>YOU WIN</h2><img src='https://img.freepik.com/free-vector/comic-style-enter-win-competition-background-play-giveaway-contest_1017-51319.jpg?semt=ais_user_personalization&w=740&q=80'></img></div>:<div><h2>YOU LOSE</h2><img src='https://media.istockphoto.com/id/996396922/photo/lose-sign.jpg?s=1024x1024&w=is&k=20&c=dUqjod3J4Q4NfUWASx3FOx7VVUGxpy3b6LzhIb3L6iw='></img></div>)}
    </div>
  )
}

export default App
