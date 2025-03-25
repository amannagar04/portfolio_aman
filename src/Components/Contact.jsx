import React from 'react'
import emailImage from '../assets/email.png';
import githubImage from '../assets/github.png';
import linkedinImage from '../assets/linkedin.png';
import phoneImage from '../assets/phone.png';

const Contact = () => {
  return (
    <div id="contact" className="h-[100vh] bg-gradient-to-r from-emerald-200 to-emerald-500 flex justify-center flex-col items-center">
      <div className="text-7xl font-bold font-serif text-gray-800">
        Contact
      </div>
      <div className="flex justify-center items-center mt-8">
        <div className=" h-[12vh] w-[20vw] p-2 bg-emerald-50 border-2 border-gray-300 rounded-2xl mx-10 flex justify-center items-center">
            <div className="w-[10vh] h-[10vh] bg-cover bg-center" style={{backgroundImage: `url(${emailImage})`}}></div>
            <div className="flex flex-col">
                <div className="text-2xl font-bold font-mono"> Email</div>
                <a href="mailto:amannagar1357@gmail.com" className="text-1xl text-gray-700 font-sans font-bold">amannagar1357@gmail.com</a>
            </div>
        </div>

        <div className=" h-[12vh] w-[20vw] p-2 bg-emerald-50 border-2 border-gray-300 rounded-2xl mr-10 flex justify-center items-center">
            <div className="w-[8vh] mr-2 h-[8vh] bg-cover bg-center" style={{backgroundImage: `url(${githubImage})`}}></div>
            <div className="flex flex-col">
                <div className="text-2xl font-bold font-mono">GitHub</div>
                <a href="https://github.com/amannagar04" className="text-1xl text-gray-700 font-sans font-bold">github.com/amannagar04</a>
            </div>
        </div>
        
        <div className=" h-[12vh] w-[20vw] mr-10 p-2 bg-emerald-50 border-2 border-gray-300 rounded-2xl flex justify-center items-center">
            <div className="w-[10vh] mr-2 h-[10vh] bg-cover bg-center" style={{backgroundImage: `url(${linkedinImage})`}}></div>
            <div className="flex flex-col">
                <div className="text-2xl font-bold font-mono">LinkedIn</div>
                <a href="https://www.linkedin.com/in/aman-nagar-a97aab28a/" className="text-1xl text-gray-700 font-sans font-bold">aman-nagar-a97aab28a/</a>
            </div>
        </div>

        <div className=" h-[12vh] w-[20vw] p-2 bg-emerald-50 border-2 border-gray-300 rounded-2xl flex items-center">
            <div className="w-[8vh] mr-2 h-[8vh] bg-cover bg-center" style={{backgroundImage: `url(${phoneImage})`}}></div>
            <div className="flex flex-col">
                <div className="text-2xl font-bold font-mono">Phone</div>
                <a className="text-1xl text-gray-700 font-sans font-bold">+91 7597603591</a>
            </div>
        </div>
      </div>

      <div className="flex flex-col">
        <input type="text" placeholder='Your Name' className="text-2xl w-[40vw] mt-3 p-2 font-sans border-2 rounded-sm border-emerald-50"/>
        <input type="text" placeholder='Your Email' className="text-2xl w-[40vw] mt-3 p-2 font-sans border-2 rounded-sm border-emerald-50"/>
        <textarea 
            placeholder="Message"
            className="text-2xl h-[20vh] w-[40vw] mt-3 p-2 font-sans border-2 rounded-sm border-emerald-50 text-left align-top resize-none"
        />
      </div>
      <button className="text-2xl text-gray-100 px-2 bg-gray-700 rounded-sm p-1 mt-2">Submit</button>
    </div>
  )
}

export default Contact
