import { useState } from 'react'
import viteLogo from '/vite.svg'
import './index.css'
import Home from "./pages/Home/Home"
import Auth from "./pages/Auth/Auth"
import Welcome from "./pages/Welcome/Welcome"
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

function App() {

  return (
    <div className = "app">
      <Router>
          <Routes>
            {/* Welcome routes */}
            <Route path="/" element={<Welcome />} />

            {/* Authentication routes */}
            <Route path="/auth" element={<Auth />} />

            {/* Home routes */}
            <Route path="/home" element={<Home />} />
            
          </Routes>
      </Router>
    </div>
  )
}

export default App
