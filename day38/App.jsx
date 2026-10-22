import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Test1 from './Components/Test1'
import Test2 from './Components/Test2'
import Test from './Components/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Welcome to React.js</h2>
    <Test/>
    <Test1/>
    <Test2/>
    </>
  )
}

export default App
