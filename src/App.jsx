import React from 'react'
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Skills from "./Components/Skills"
import Resume from "./Components/Resume"
import Contact from "./Components/Contact"
import Copyright from "./Components/Copyright"

const App = () => {
  return (
    <div className="w-full">
      <Navbar/>
      <Home/>
      <Skills/>
      <Resume/>
      <Contact/>
      <Copyright/>
    </div>
  )
}

export default App
