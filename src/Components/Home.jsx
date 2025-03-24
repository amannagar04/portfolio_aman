import React from 'react'

const Home = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-blue-800">
      <div className="text-7xl font-bold font-serif text-blue-100">
        Hi, I'm Aman Nagar
      </div>
      <div className="w-5/7 mt-6 text-3xl font-serif font-bold text-gray-200 text-center">
      I am a passionate Web Developer with a strong foundation in HTML, CSS, JavaScript, and React. My expertise includes API integration, building dynamic and user-friendly websites, and a deep understanding of Data Structures and Algorithms. Currently pursuing a B.Tech in Electronics and Communication Engineering at Malaviya National Institute of Technology, Jaipur, I am eager to contribute my skills in frontend development and problem-solving to impactful projects.
      </div>

      <div className="absolute bottom-10">
        <a href="#" className="text-2xl text-cyan-300 font-mono">Skills</a>
      </div>
    </div>
  )
}

export default Home
