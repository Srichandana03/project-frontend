import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Reg from './Reg'   // 🔹 IMPORT YOUR REGISTER FORM

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

function Help() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Help Page</h1>
      <Link to="/">Back to Home</Link>
    </div>
  )
}

export default function App() {
  return (
    <>
      <nav style={{ padding: '10px', textAlign: 'center' }}>
        <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
        <Link to="/reg" style={{ marginRight: '20px' }}>Register</Link>
        <Link to="/h">Help</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        {/* 🔹 USE YOUR Reg.jsx COMPONENT HERE */}
        <Route path="/reg" element={<Reg />} />

        <Route path="/h" element={<Help />} />
      </Routes>
    </>
  )
}
