import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About } from './About'
import { Home } from './Home'
import React from 'react'
export const App = () => {

  return (
    <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>
    </React.StrictMode>
  )
}

