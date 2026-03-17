import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {
  let [count,setcount]=useState(0);
  let[random,setRandom]=useState(0);
  let[cnt,setcnt]=useState(0);

  //mounting
  function someWork(){
    console.log("Work is done");
  }

  //updating + mounting
  function runOnCountChange(){
    console.log("count changes");
  }
  // someWork();   //this function will run on each and every rerender but if u want to run this function only on first render then u had to use useEffect

  //mounting phase
  useEffect(()=>{
  someWork();

  let id = setInterval(()=>{
    console.log("Set interval");
  },1000);

  // cleanup function
  //this is closure
  return ()=>{
    clearInterval(id);
  }
},[])

useEffect(()=>{
  let id=setInterval(()=>{
    setcnt(cnt=cnt+1);
  },1000)
  return () => clearInterval(id);
},[])

  useEffect(()=>{ 
    runOnCountChange();
  },[count])
  return (
    <div>
      <h1>UseEffect</h1>
      <button onClick={()=>setcount(count+1)}>Click</button>
      <h1>{count}</h1>   
       {/* function dobara nhi chala ek baar hi chaala par count badh rha hai, unneccessay rendering ko band karta hai */}


       <button onClick={() => setRandom(Math.random())}>
        Random
      </button>

      <h1>{random}</h1>
      <h1>StopWatch : {cnt}</h1>
    </div>
  )
}

export default App
