import React from 'react'
import './index.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Knowledge from './Components/Knowledge'
import BG from './Components/Gridscan/BG'
import Certificates from './Components/Certificates'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Projects from './Components/Projects'
const App = () => {
  return (
    <div className='app'>
      <div style={{ position: "fixed",top: 0,left: 0,width: "100%",height: "100%",zIndex: 0}}><BG/></div>
       <Header/>

         <Hero/>
        <About/>
          <Knowledge/>
          <Projects/>
          <Certificates/>
          <Contact/>
        <Footer/>
    </div>
  )
}

export default App