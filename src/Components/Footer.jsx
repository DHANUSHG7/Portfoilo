import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div><footer className="footer sm:footer-horizontal text-white footer-center text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by DHANUSH </p>
    <p>Made with ❤️ by Dhanush</p>
      <div className='flex'><a href="https://www.linkedin.com/in/dhanush-g-b60a392a8/" target="_blank" rel="noopener noreferrer"
        className="text-white text-3xl p-1 hover:text-indigo-300">
      <FaLinkedin />
    </a>

    <a href="https://github.com/DHANUSHG7" target="_blank" rel="noopener noreferrer"
        className="text-white text-3xl p-1 hover:text-indigo-300">
      <FaGithub />
    </a>
      <a href="https://www.instagram.com/_dhanush_7___/" target="_blank" className=" relative z-50 text-white text-3xl p-1 hover:text-indigo-300"><FaInstagram /></a> 
  </div>
  </aside>
</footer></div>
  )
}

export default Footer