import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-blue-200/70 backdrop-blur-lg border-b border-white/10 shadow-lg flex justify-between items-center px-10 py-4">
        <a href='#' className="text-lg font-bold">Portfolio</a>
        <span className="flex space-x-6">
        <a href="#">Home</a>
        <a href="#skills">Skills</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
    </span>
    </nav>
  )
}

export default Navbar
