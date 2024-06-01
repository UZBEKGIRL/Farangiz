import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './Componenets/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Card/>
      <Card/>
    </div>
  )
}

export default App
