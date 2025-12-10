import React from 'react'

const About = () => {
  return (
    <div id='about'>
     <h1 className="fade-up bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 bg-clip-text text-transparent text-5xl text-center p-5 m-4 font-bold"> ABOUT ME</h1>
     <p className='fade-up text-xl p-3 text-white text-center'>My education has been a journey of self-discovery and growth. My educational details are as follows.</p>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
  <li>
    <div className="timeline-middle">
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="fade-up timeline-start mb-10 md:text-end m-6 backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/20 text-white p-4 rounded-2xl md:p-4 shadow-lg">
      <time className=" zoom-in1 font-mono italic p-3">Oct 2021 - Sep 2025</time>
      <div className=" zoom-in1 text-2xl font-bold p-3 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 bg-clip-text text-transparent ">BE - Computer Science and Engineering</div>
     <div className='zoom-in1 p-3'> Dhanalakshmi Srinivasan Engineering College (Autonomous),  Perambalur <br />I am Holding a Bachelor's degree in Computer Science and Engineering at  Dhanalakshmi Srinivasan Engineering College. <br /> I maitained my CGPA at 7.67.</div>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="fade-up timeline-end m-6 md:mb-10  backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/20 text-white p-4 rounded-2xl md:p-1 shadow-lg">
        <time className=" zoom-in1 font-mono italic p-3">Apr 2019 - Apr 2021</time>
      <div className="zoom-in1text-2xl font-bold p-3 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 bg-clip-text text-transparent ">HSSC (XII), Computer Maths Group</div>
   <div className='p-3 zoom-in1'>
     RAJ VIDYA BHAVAN MATRICLATION HIGHER SECONDARY SCHOOL, THURAIYUR <br />I completed my Class 12 education at R.V.B School, Thuraiyur, where I studied Maths with Computer Science. 
    <br /> I maitained
      my grade : 70%
   </div>
    </div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
    <div className="fade-up timeline-start mb-10 md:text-end m-6  backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/20 text-white p-4 rounded-2xl shadow-xl">
        <time className="zoom-in1 font-mono italic p-3">june 2018 - Apr 2019</time>
      <div className=" zoom-in1 text-2xl font-bold p-3 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 bg-clip-text text-transparent ">HSC (X)</div>
   <div className=' zoom-in1 p-3'>RAJ VIDYA BHAVAN MATRICLATION HIGHER SECONDARY SCHOOL, THURAIYUR <br />I completed my Class 10 education at R.V.B (MATRIC) HR. SEC. SCHOOL, Thuraiyur. <br />
     I maitained
      my grade : 71% </div>
    </div>
    <hr />
  </li>

</ul>

    </div>
  )
}

export default About