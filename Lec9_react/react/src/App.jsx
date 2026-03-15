import React from 'react'
import { useState,useRef } from 'react'

const App = () => {
  // let [name,setName]= useState("");
  let inpRef=useRef();
  let [showName,setShowName]= useState("");
  // function changeName(inpName){
  //     console.log(inpName);
  //   setName(inpName)
  // }
  // function changeShowName(){
  //   setShowName(name)
  // }
  function changeShowName(){
    console.log(inpRef.current.value);
    setShowName(inpRef.current.value)
  }
  // console.log(inpRef.current) //----gives input
  return (
    // <div>
    //   <h1>useRef</h1>
    //   <inputonChange={(e)=>changeName(e.target.value)} type="text" placeholder='enter your name' />   
    //   <button onClick={()=>changeShowName(name)}>Click</button>
    //   <h1>name is {showName}</h1>
    // </div>
    <div>
      <h1>useRef</h1>
      <input ref={inpRef} type="text" placeholder='enter your name' />   
      <button onClick={()=>changeShowName(name)}>Click</button>
      <h1>name is {showName}</h1>
    </div>
  )
}

export default App
// e.target giver element
// e event return
//



//useref usestate diff