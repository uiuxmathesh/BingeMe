import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Header from './components/common/header/Header.jsx'
import HeroSection from './components/hero/HeroSection.jsx'  
import ScrollTester from './components/ScrollTester.jsx'

ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <Header />
    <HeroSection/>
  </React.StrictMode>,
)
