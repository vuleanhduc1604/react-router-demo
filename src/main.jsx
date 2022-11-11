import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

import Home from "./pages/home/Home.jsx"
import About from "./pages/about/About.jsx"
import Contact from "./pages/contact/Contact.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
