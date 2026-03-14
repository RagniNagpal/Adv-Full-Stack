import React, { useState } from 'react'

const App = () => {

  // 1️⃣ Primitive state (number)
  // state = current value
  // setState = function to update state
  let [state, setState] = useState(0);

  // 2️⃣ Non-primitive state (array of objects)
  // user ek array hai jisme objects store ho rahe hain
  let [user, setUser] = useState([{ name: "Saloni", age: 21 }]);

  function changeState() {
    // ❗ React state ko kabhi direct modify nahi karte
    // State immutable treat ki jati hai

    let newState = state + 1;   // new value create ki
    setState(newState);         // setter se update kiya (re-render trigger hoga)
  }

  function addUser(name, age) {

    // ❌ Direct mutation galat hota:
    // user.push({name:name,age:age})

    // ❌ Same reference wapas bhejna bhi galat:
    // setUser(user)

    // ✅ Correct approach:
    // Spread operator se new array create karo
    // ...user ka matlab hai existing elements copy ho jayenge
    // phir naya object add hoga

    let newUser = [...user, { name: name, age: age }];

    // setUser new reference receive karega
    // React shallow comparison karega
    // Reference change detect hoga
    // Component re-render karega
    setUser(newUser);
  }

  return (
    <div>

      {/* 3️⃣ Rendering list using map() */}
      {/* React ko har child element ke liye unique key chahiye */}
      {/* key diffing algorithm ke liye important hoti hai */}

      {user.map((u, index) => {
        return (
          <div key={index}>
            <h4>name: {u.name}</h4>
            <h5>age: {u.age}</h5>
          </div>
        )
      })}

      {/* 4️⃣ Button click pe addUser call hoga */}
      {/* Direct function call nahi karna */}
      {/* onClick me function reference ya arrow function dena hota hai */}

      <button onClick={function () { addUser("Sanam", 21) }}>
        AddUser
      </button>

    </div>
  )
}

export default App
