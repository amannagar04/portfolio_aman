import React from 'react';
import cppImage from '../assets/cpp.png';
import htmlImage from '../assets/html.png';
import pythonImage from '../assets/python.png';
import reactImage from '../assets/react.png';
import cssImage from '../assets/css.png';
import jsImage from '../assets/js.png';
import sqlImage from '../assets/sql.png';
import powerbiImage from '../assets/powerbi.png';

const Skills = () => {
  const skills = [
    cppImage, pythonImage, htmlImage, reactImage,
    jsImage, cssImage, sqlImage, powerbiImage
  ];

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-r from-gray-200 to-gray-500 flex flex-col items-center justify-center px-4 py-10">
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((img, i) => (
            <div
              key={i}
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-cover bg-center rounded-xl shadow-lg"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>
      <a href="#resume" className="text-xl sm:text-2xl text-white font-mono mt-10">↓ Resume ↓</a>
    </section>
  );
};

export default Skills;
