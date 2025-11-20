import React from 'react'
import intern from '../assets/intern.jpg'
import web from '../assets/webdev.jpg'
import mern from '../assets/mern.jpg'
const Certificates = () => {
  return (
    <div id='certificate'>
      <h1 className='uppercase fade-up bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 bg-clip-text text-transparent text-5xl text-center p-5 m-4 font-bold'>Certificates</h1>
      <div className='flex justify-center items-center flex-wrap p-4 m-4 gap-12 '>
        <div className="fade-up card  w-96  backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border
         border-white/20 rounded-2xl md:p-2 p-6 shadow-lg  md:h-[80vh]">
      <div className="zoom-in1 card-body">
      <h2 className=" zoom-in1 card-title bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 bg-clip-text text-transparent text-3xl font-bold">Web-Development</h2>
      <p className='zoom-in1 textarea-lg text-white'>I was successfully completed the course The Complete 2024 Web Development Bootcamp in UDEMY .</p>
      <p className='zoom-in1 text-white'>HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
       </div>
       <figure className='zoom-in1'>
         <img src={web} className=' rounded-3xl' alt="Not Found" />
        </figure>
      </div>
        <div className="fade-up card w-96  backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/20 
      rounded-2xl md:p-2 p-6 shadow-lg  md:h-[80vh]">
      <div className="card-body zoom-in1 ">
      <h2 className="card-title zoom-in1 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 bg-clip-text text-transparent text-3xl font-bold">My Internship</h2>
      <p className='textarea-lg zoom-in1 text-white'>I done my Frontend Developer internship at BillonByte Private Limited Company. Duration of 3 months
         During the Internship I contribute some Real-time projects</p>
       </div>
       <figure className='zoom-in1'>
         <img src={intern} className=' zoom-in1 rounded-t-4xl md:rounded-2xl h-80 w-100' alt="Not Found" />
        </figure>
      </div>
        <div className="fade-up card  w-96  backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/20 
      rounded-2xl md:p-2 p-6 shadow-lg  md:h-[80vh]]">
      <div className="zoom-in1 card-body">
      <h2 className="zoom-in1 card-title bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 bg-clip-text text-transparent text-3xl font-bold">MERN Development</h2>
      <p className='zoom-in1 textarea-lg text-white'>I was successfully completed the course The Complete MERN Development Bootcamp in UDEMY .</p>
      <p className='zoom-in1 text-white'>HTML, CSS, Javascript,Tailwind css, Node,Express, React,Mongodb</p>
       </div>
       <figure className='zoom-in1'>
         <img src={mern} className='rounded-2xl' alt="Not Found" />
        </figure>
      </div>
        
      </div>
    </div>
  )
}

export default Certificates