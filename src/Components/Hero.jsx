import React from "react";
import my from "../assets/my.jpeg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import dhanush from '../assets/Dhanush-G.pdf'
import './Animation.css'
const Hero = () => {
  return (
    <section id="home" className="block md:py-16 py-12 lg:h-[75vh] lg:flex justify-evenly items-center md:m-9 m-6 
      backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/20 
      rounded-2xl md:p-8 p-6 shadow-lg zoom-in">

      <div className="flex justify-center md:justify-start">
        <img 
          className="md:w-80 md:h-80 w-40 h-40 rounded-full object-cover fade-left"
          src={my}
          alt="profile"
        />
      </div>

      <div className="md:p-5 py-4 text-center md:text-left zoom-in1">
        <h1 className="p-0 md:p-3 lg:text-4xl text-2xl text-white">
          Hi I'm{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 bg-clip-text text-transparent font-bold md:text-6xl text-3xl">
            DHANUSH G
          </span>
        </h1>

        <h3 className="md:p-3 p-1 text-white text-lg">
          A <span className="lg:text-4xl text-xl p-1">MERN STACK</span> developer
        </h3>

        <p className="md:p-3 p-1 text-white text-lg max-w-xl">
          A web dev crafting full-stack magic with the MERN stack. Obsessed with
          clean UI, smart APIs, and shipping projects that actually work in the
          real world.
        </p>

        <div className="flex justify-center md:justify-start gap-6 items-center mt-4">
          <a href={dhanush} target="_blank" rel="noopener noreferrer"
            className="inline-block px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md text-lg">
            Open CV
          </a>

          <a href="https://www.linkedin.com/in/dhanush-g-b60a392a8/" target="_blank" rel="noopener noreferrer"
             className="text-white text-3xl p-1 hover:text-indigo-300">
            <FaLinkedin />
          </a>

          <a href="https://github.com/DHANUSHG7" target="_blank" rel="noopener noreferrer"
             className="text-white text-3xl p-1 hover:text-indigo-300">
            <FaGithub />
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
