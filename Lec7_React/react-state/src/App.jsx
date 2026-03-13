import React from 'react'
import { useState } from 'react';
import Child from './Child';
const App = () => {
  // let count=0;
  let[count,setCount]=useState(0);
  function increase(){
    count=count+1;
    console.log(count);
    setCount("Ragni");
  }
  return (
    <div>
      <h1>Counter variable</h1>
      <h1>Count:{count}</h1>
      <button onClick={increase}>Increment</button>
      <Child name="ragni" count={count} />
    </div>
  )
}

export default App
//react does not keep track of regular variables it only keep tracks state variable if state variable changes react rerender the component and updat ethe dom

//how to declare a state variable...
//Syntax
// let [state(variable),setstate(function to change state)]=useState(0); -> initial value
//diff bw state and props

// state- states are mutable,set state
// props atre immutable,child


//continuous subarray sum-> return true or false if subaarray is a good array 1. if subarray length is atleast 2 2. sum of all the elemnets in subarray is multiple of k