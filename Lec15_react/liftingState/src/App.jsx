import React, { useState } from 'react'
import Child1 from './component/Child1'
import Child2 from './component/Child2'

const App = () => {
  let [data,setData]=useState(null);
  function getData(data){
    console.log("Data from Child1:", data)
    setData(data);
  }

  return (
    <div>
      <Child1 getData={getData} />
      <Child2 data={data} />
    </div>
  )
}

export default App