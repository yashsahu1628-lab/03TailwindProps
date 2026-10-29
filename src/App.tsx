import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    "Name": "Yash",
    "age": 21,
    "add": "coding"
  }

  return (
    <div>
      <h1 className= "bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
       <Card Name="ChaiAurCode" add="Code"/>
       <Card Name="ChaiAurReact" add="React"/>
    </div>
  )
}

export default App