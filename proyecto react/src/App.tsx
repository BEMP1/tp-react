import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppProduct } from './components/AppProduct/AppProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
       <AppProduct/>
      </div>
    </>
  )
}

export default App