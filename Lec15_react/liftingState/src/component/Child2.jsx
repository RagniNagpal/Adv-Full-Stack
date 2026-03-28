import React from 'react'

function Child2(props) {
  return (
    <div>
      <h1>Child2</h1>
      {/* //conditional rendering */}
      {props.data && <h4>Data from Child1 is {props.data}</h4>}
    </div>
  )
}

export default Child2
