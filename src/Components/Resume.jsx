import React from 'react';
import resumeImage from '../assets/resume.png';

const Resume = () => {
  return (
    <section id="resume" className="min-h-screen bg-gradient-to-r from-amber-200 to-amber-500 flex flex-col items-center justify-center px-4 py-10">
      <div
        className="w-full max-w-[600px] max-h-[80vh] bg-contain bg-no-repeat bg-center aspect-[3/4]"
        style={{ backgroundImage: `url(${resumeImage})` }}
      ></div>
      <a
        href="https://drive.usercontent.google.com/u/0/uc?id=1rwxNlib80nDbAWI9euyreE33hYCGkGzl&export=download"
        className="text-sm sm:text-base md:text-lg font-bold font-mono mt-4"
      >
        Download Resume
      </a>
      <a href="#contact" className="text-lg sm:text-xl text-white font-mono mt-4">↓ Contact ↓</a>
    </section>
  );
};

export default Resume;
