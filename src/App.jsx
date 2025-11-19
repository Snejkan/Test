import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/Header';
import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';












function Home() {
 return (
    <div className='home'>
      <Header />
      <Navbar />      
    </div>
        
  )  
   
}

function About() {
  return (
    <div className='home'>
      <Header />
      <Navbar />
    </div>
  )
}

function Contact() {
  return (
    <div className='home'>
      <Header />
      <Navbar />
    </div>
  )
}


function App() {

  
  return (
    <BrowserRouter>
      
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer>
        <img src="public/images/Footer.svg" alt="" />
      </Footer> 
      
      
    </BrowserRouter>
    
  );
}
export default App