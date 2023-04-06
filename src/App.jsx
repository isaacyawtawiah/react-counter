import { useState } from 'react'
import './App.css'

function App() {
  const [count, myCount] = useState(0);

  return (
    <div className="App">
      <h1>counterFunction</h1>
      <p>{count}</p>
      <button onClick={() => myCount(count + 1)}>increment</button>
      <button onClick={() => myCount(count - 1)}>decrement</button>
      
    </div>
  )
}

export default App
