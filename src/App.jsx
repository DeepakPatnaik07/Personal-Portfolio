import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aboutme from './components/Aboutme'
import Slider from './components/Carousel'
import Skills from './components/Skills'
import './App.css'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Project from './components/Projects'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Navbar/>
    <Hero/>
    <Aboutme/>
    <Skills/>
    <Experience/>
    <Project/>
    <Slider/> 
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
