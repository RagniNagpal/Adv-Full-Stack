import React from 'react'
import './Header.css'

const Header = (props) => {
  console.log(props); // object will come
  return (
    <div>
      <h1 className='color'>Header</h1>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Result: {props.result}</p>
    </div>
  )
}

// named export 
export function sum(a,b){
  return a+b;
}
export function mul(a,b){
  return a*b;
}

// default export 
export default Header
