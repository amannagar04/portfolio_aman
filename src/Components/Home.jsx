import React from 'react';

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-blue-800 px-4 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-blue-100">
        Hi, I'm Aman Nagar
      </h1>

      <p className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mt-6 text-lg sm:text-xl md:text-2xl font-serif font-semibold text-gray-200">
        I am a passionate Web Developer with a strong foundation in HTML, CSS, JavaScript, and React. My expertise includes API integration, building dynamic and user-friendly websites, and a deep understanding of Data Structures and Algorithms. Currently pursuing a B.Tech in Electronics and Communication Engineering at Malaviya National Institute of Technology, Jaipur, I am eager to contribute my skills in frontend development and problem-solving to impactful projects.
      </p>

      <div className="absolute bottom-6 sm:bottom-10">
        <a href="#skills" className="text-lg sm:text-xl text-cyan-300 font-mono">
          ↓ Skills ↓
        </a>
      </div>
    </section>
  );
};

export default Home;