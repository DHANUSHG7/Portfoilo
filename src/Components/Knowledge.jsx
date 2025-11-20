import React from 'react'
import html from '../assets/html-5.png'
import css from '../assets/css-3.png'
import bootstrap from '../assets/bootstrap.png'
import vite from '../assets/vite.svg'
import tailwindcss from '../assets/tailwindcss.svg'
import js from '../assets/js.png'
import nodejs from '../assets/nodejs.svg'
import expressjs from '../assets/express-js.png'
import mongo from "../assets/mongod.svg"
import mysql from "../assets/mysql.png"
import git from "../assets/social.png"
import github from "../assets/github.png"
import vscode from "../assets/vscode.svg"
import canva from "../assets/canva.png"
import netlify from "../assets/netlify.svg"
import firebase from "../assets/firebase.svg"




const Knowledge = () => {
  return (
    <div id='knowledge' >
        
        <h1 className="fade-up bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 bg-clip-text text-transparent text-5xl text-center p-5 m-4 font-bold"> KNOWLEDGE</h1>

      <div className='fade-up flex justify-center items-center flex-wrap p-3 gap-5 '> 
        <div className='fade-up backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/10 
        rounded-2xl md:p-3 p-2 shadow-lg text-transparent'>
          <h1  className=' zoom-in1 text-3xl text-white'>Front-End Technologies</h1>
          <div className='zoom-in1 flex justify-center items-center p-3' >
            <img src={html} alt="" className='w-15 p-2  ' />
            <p className=' text-white font-bold' >HTML</p>
          </div>
          <div className='zoom-in1 flex justify-center items-center p-3' >
            <img src={css} alt="" className='w-15 p-2  ' />
            <p className=' text-white font-bold' >CSS</p>
          </div>
          <div className='zoom-in1 flex justify-center items-center p-3' >
            <img src={js} alt="" className='w-15 p-2  ' />
            <p className=' text-white font-bold' >JAVA SCRIPT</p>
          </div>
          <div className='zoom-in1 flex justify-center items-center p-3' >
            <img src={vite} alt="" className='w-15 p-2  ' />
            <p className=' text-white font-bold' >REACT JS</p>
          </div>
          <div className='zoom-in1 flex justify-center items-center p-3' >
            <img src={bootstrap} alt="" className='w-15 p-2  ' />
            <p className=' text-white font-bold uppercase' >bootstrap</p>
          </div>
          <div className='zoom-in1 flex justify-center items-center p-3' >
            <img src={tailwindcss} alt="" className='w-15 p-2  ' />
            <p className=' text-white font-bold' >TAILWIND CSS</p>
          </div>
        </div>
        <div className=''>
          <div className='fade-up mb-5 backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/10 
        rounded-2xl md:p-3 p-2 shadow-lg text-transparent'>
          <h1  className='text-3xl text-white'>Back-End Technologies</h1>
          
          <div className='zoom-in1 flex justify-center items-center p-3' >
            <img src={nodejs} alt="" className='w-15 p-2  ' />
            <p className=' text-white font-bold' >NODE JS</p>
          </div>
          <div className='zoom-in1 flex justify-center items-center p-3' >
            <img src={expressjs} alt="" className='w-15 p-2  ' />
            <p className=' text-white font-bold' >EXPRESS JS</p>
          </div>
         
        </div>
        
        <div className='fade-up mt-9 backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/10 
        rounded-2xl md:p-3 p-2 shadow-lg text-transparent'>
          <h1  className='text-3xl text-white'>Database Technologies</h1>
          <div className='zoom-in1 flex justify-center items-center p-3' >
            <img src={mongo} alt="" className='w-15 p-2  ' />
            <p className=' text-white font-bold' >MONGO DB</p>
          </div>
          <div className='zoom-in1 flex justify-center items-center p-3' >
            <img src={mysql} alt="" className='w-15 p-2  ' />
            <p className=' text-white font-bold' >MY SQL</p>
          </div>
       
         
        </div>
        </div>

         <div className='fade-up backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/10 
        rounded-2xl md:p-3 p-2 shadow-lg text-transparent'>
          <h1  className='text-3xl text-white w-75'> Other Technologies</h1>
          <div className='zoom-in1 flex justify-center items-center p-3' >
            <img src={git} alt="" className='w-15 p-2  ' />
            <p className=' text-white font-bold' >GIT</p>
          </div>
          <div className='zoom-in1 flex justify-center items-center p-3' >
            <img src={github} alt="" className='w-15 p-2  ' />
            <p className=' text-white font-bold' >GITHUB</p>
          </div>
          <div className='zoom-in1 flex justify-center items-center p-3' >
            <img src={vscode} alt="" className='w-15 p-2  ' />
            <p className=' text-white font-bold' >VS CODE</p>
          </div>
          <div className=' zoom-in1 flex justify-center items-center p-3' >
            <img src={canva} alt="" className='w-15 p-2  ' />
            <p className=' text-white font-bold' >CANVA</p>
          </div>
          <div className='zoom-in1 flex justify-center items-center p-3' >
            <img src={netlify} alt="" className='w-15 p-2  ' />
            <p className=' text-white font-bold uppercase' >netlify</p>
          </div>
          <div className='zoom-in1 flex justify-center items-center p-3' >
            <img src={firebase} alt="" className='w-15 p-2  ' />
            <p className=' text-white font-bold' >FIREBASE</p>
          </div>
        </div>
      </div>
     

    </div>
  )
}

export default Knowledge