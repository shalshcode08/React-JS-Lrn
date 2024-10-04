import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(0)

  return (
    <div>
      <button onClick={()=> setCount((count)=>count+1)}>click me {count}</button>

      <h1>Counter value : {value}</h1>
      <button onClick={()=> setValue((value)=> value+1)}>Add Value</button>
      <button onClick={()=> setValue((value)=>value-1)}>Remove Value</button>
      
    </div>
  )
}

export default App
