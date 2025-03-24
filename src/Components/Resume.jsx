import React from 'react'
import resumeImage from '../assets/resume.png';

const Resume = () => {
  return (
    <div className="h-[100vh] bg-gradient-to-r from-amber-200 to-amber-500 flex justify-center flex-col items-center">
        <div className="h-[70vh] w-[50vw] bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${resumeImage})` }}></div>
        <a href="https://drive.usercontent.google.com/u/0/uc?id=1rwxNlib80nDbAWI9euyreE33hYCGkGzl&export=download" className="text-1xl font-bold font-mono mt-2">
            Download Resume
        </a>
    </div>
  )
}

export default Resume
