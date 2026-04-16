import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{textAlign: "center",marginTop:"50px"}}>
        <h1>Hellow World</h1>
        <p>This is my simple React app</p>
      </div>
    </>
  )
}

export default App
