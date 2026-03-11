import React from 'react'


//App component
const App = () => {
  return (
    <div>
      <Header/>
      <h1>Hello world!!</h1>
    </div>
    //but it looks like html
  )
}

//Rule 1 - Component name should start with capital letter because html tag smei differentiate karne ke liye
let a=6;
let b=9;
function Header(){
  return(
    <div>
      <div>
        <h2>LOGO</h2>
      </div>
       <div>
        <nav>
          <ul>
            <li className="nav-items">Home</li>
            <li className="nav-items">About</li>
            <li className="nav-items">Contact</li>
            <br />
            <h1>{a+b}</h1> 
             
          </ul>
        </nav>
       </div>
    </div>
  )
}

export default App




