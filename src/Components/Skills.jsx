import React from 'react'
import cppImage from '../assets/cpp.png';
import htmlImage from '../assets/html.png';
import pythonImage from '../assets/python.png';
import reactImage from '../assets/react.png';
import cssImage from '../assets/css.png';
import jsImage from '../assets/js.png';
import sqlImage from '../assets/sql.png';
import powerbiImage from '../assets/powerbi.png';

const Skills = () => {
  return (
    <div className="h-[100vh] bg-gradient-to-r from-gray-200 to-gray-500 flex justify-center flex-col items-center">
      <div className="flex justify-center">
        <div className="w-[200px] h-[200px] m-10 bg-cover bg-center" style={{ backgroundImage: `url(${cppImage})` }}></div>
        <div className="w-[200px] h-[200px] m-10 bg-cover bg-center" style={{ backgroundImage: `url(${pythonImage})` }}></div>
        <div className="w-[200px] h-[200px] m-10 bg-cover bg-center" style={{ backgroundImage: `url(${htmlImage})` }}></div>
        <div className="w-[200px] h-[200px] m-10 bg-cover bg-center" style={{ backgroundImage: `url(${reactImage})` }}></div>
      </div>
      <div className="flex justify-center mt-15">
        <div className="w-[200px] h-[200px] m-10 bg-cover bg-center" style={{ backgroundImage: `url(${jsImage})` }}></div>
        <div className="w-[200px] h-[200px] m-10 bg-cover bg-center" style={{ backgroundImage: `url(${cssImage})` }}></div>
        <div className="w-[200px] h-[200px] m-10 bg-cover bg-center" style={{ backgroundImage: `url(${sqlImage})` }}></div>
        <div className="w-[200px] h-[200px] m-10 bg-cover bg-center" style={{ backgroundImage: `url(${powerbiImage})` }}></div>
      </div>
      <div className="">
        <a href="#" className="text-2xl text-white font-mono">Resume</a>
      </div>
    </div>
  )
}

export default Skills
