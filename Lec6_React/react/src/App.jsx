import React from 'react'
import Header from './component/headerComponent/Header'
import Footer from './component/footerComponent/Footer'

import { mul } from './component/headerComponent/Header'
import { sum } from './component/headerComponent/Header'

const App = () => {
  let a = 10;
  let b = 6;
  let result = sum(a, b);   // ✅ ONLY FIX

  return (
    <div>
      <Header name="Ragni" result={result} age="20"/>
      <h1>Hello World!!</h1>
      <Footer />
      <h2>Sum: {sum(a, b)}</h2>
      <h2>Mul: {mul(a, b)}</h2>
    </div>
  )
}

export default App
