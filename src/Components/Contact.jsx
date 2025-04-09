import React from 'react';
import emailImage from '../assets/email.png';
import githubImage from '../assets/github.png';
import linkedinImage from '../assets/linkedin.png';
import phoneImage from '../assets/phone.png';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gradient-to-br from-emerald-200 via-emerald-300 to-emerald-500 flex flex-col items-center px-4 py-10"
    >
      <h1 className="text-5xl md:text-7xl font-bold font-serif text-gray-800 text-center mb-10">
        Contact
      </h1>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10 w-full max-w-7xl px-4">
        {/* Email */}
        <div className="flex items-center bg-emerald-50 border-2 border-gray-300 rounded-2xl p-4 space-x-4">
          <div
            className="w-16 h-16 bg-cover bg-center"
            style={{ backgroundImage: `url(${emailImage})` }}
          ></div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold font-mono">Email</h2>
            <a
              href="mailto:amannagar1357@gmail.com"
              className="text-base text-gray-700 font-sans font-semibold break-all"
            >
              amannagar1357@gmail.com
            </a>
          </div>
        </div>

        {/* GitHub */}
        <div className="flex items-center bg-emerald-50 border-2 border-gray-300 rounded-2xl p-4 space-x-4">
          <div
            className="w-14 h-14 bg-cover bg-center"
            style={{ backgroundImage: `url(${githubImage})` }}
          ></div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold font-mono">GitHub</h2>
            <a
              href="https://github.com/amannagar04"
              className="text-base text-gray-700 font-sans font-semibold break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/amannagar04
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center bg-emerald-50 border-2 border-gray-300 rounded-2xl p-4 space-x-4">
          <div
            className="w-16 h-16 bg-cover bg-center"
            style={{ backgroundImage: `url(${linkedinImage})` }}
          ></div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold font-mono">LinkedIn</h2>
            <a
              href="https://www.linkedin.com/in/aman-nagar-a97aab28a/"
              className="text-base text-gray-700 font-sans font-semibold break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              aman-nagar-a97aab28a/
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center bg-emerald-50 border-2 border-gray-300 rounded-2xl p-4 space-x-4">
          <div
            className="w-14 h-14 bg-cover bg-center"
            style={{ backgroundImage: `url(${phoneImage})` }}
          ></div>
          <div className="flex flex-col">
            <h2 className="text-xl font-bold font-mono">Phone</h2>
            <span className="text-base text-gray-700 font-sans font-semibold">
              +91 7597603591
            </span>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form className="w-full max-w-2xl flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="text-lg md:text-xl p-3 border-2 rounded-md border-emerald-50"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="text-lg md:text-xl p-3 border-2 rounded-md border-emerald-50"
        />
        <textarea
          placeholder="Message"
          className="text-lg md:text-xl p-3 h-40 border-2 rounded-md border-emerald-50 resize-none"
        />
        <button
          type="submit"
          className="text-lg md:text-xl text-white bg-gray-800 hover:bg-gray-700 transition-all px-6 py-2 rounded-md"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
