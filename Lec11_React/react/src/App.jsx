// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import './App.css';

// const App = () => {
//   let [count,setCount]=useState(0);
//   let [color,setColor]=useState("red");

//   //logic to change state
//   useEffect(()=>{
//     let id=setInterval(()=>{
//       setCount((c)=>c+1)   //guarentee previous state value
//     },1000);

//     return () => clearInterval(id);

//     //agar strictmode tehn c=c+1 auto because strictmode useeffect(component) ki poori lifecycle chalaata hai mount ke baad component ko page then auto unmount then agar mount agar 2 se nhi to clear interval karna padega
//   },[])

//   //box in red colour when button click 1 to 10 any random colour will appear
  
//   return (
//     <div>
//       <h1>Stop Watch : {count}</h1>

//       {/* box */}
//       {/* yahi add kiya hai */}
//       <div 
//         className='box'
//         style={{ backgroundColor: color }}
//       >
//         <p>This is a box</p>
//       </div>

//       <button onClick={() => 
//         setColor(
//           ["red","blue","green","yellow","purple",
//            "orange","pink","brown","cyan","lime"]
//           [Math.floor(Math.random()*10)]
//         )
//       }>
//         Click
//       </button>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {
  let [count,setCount]=useState(0);
  let [color,setColor]=useState("red");


  //agar strictmode tehn c=c+1 auto because strictmode useeffect(component) ki poori lifecycle chalaata hai mount ke baad component ko page then auto unmount then agar mount agar 2 se nhi to clear interval karna padega

  //box in red colour when button click 1 to 10 any random colour will appear
  const colors = [
    "red","blue","green","yellow","purple",
    "orange","pink","brown","cyan","lime"
  ];

  //logic to change stopwatch state
  useEffect(()=>{
    let id=setInterval(()=>{
      setCount((c)=>c+1)   //guarentee previous state value
    },1000);

    return () => clearInterval(id);
  },[])

  // 🔥 Auto color change logic (2 sec ke liye)
  useEffect(()=>{
    let colorInterval = setInterval(()=>{
      setColor(
        colors[Math.floor(Math.random()*colors.length)]
      );
    },500);   // fast change for demo

    // 2 sec baad stop
    let stopTimeout = setTimeout(()=>{
      clearInterval(colorInterval);
    },2000);

    return () => {
      clearInterval(colorInterval);
      clearTimeout(stopTimeout);
    }

  },[])

  return (
    <div>
      <h1>Stop Watch : {count}</h1>

      <div 
        className='box'
        style={{ backgroundColor: color }}
      >
        <p>This is a box</p>
      </div>
    </div>
  )
}

export default App
