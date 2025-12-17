import React from 'react'
import business from '../assets/business.png'
import mexant from '../assets/mexant.png'
import villa from '../assets/villa.png'
import portfolio from '../assets/portfoliio.png'
import netflix from '../assets/netflix.png'
import vegii from '../assets/vegii.png'

const Projects = () => {
  return (
    <div id='projects'>
         <h1 className='fade-up uppercase fade-up bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 bg-clip-text text-transparent text-5xl text-center p-5 m-4 font-bold'>Projects</h1>
        <div>
            <div className='fade-up flex flex-wrap justify-center items-center gap-12 p-5 m-5'>
                <div className="card w-85 h-[60vh] backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border
         border-white/20 rounded-2xl md:p-2 p-6 shadow-lg ">
                <figure className='zoom-in1 h-45'>
                    <img
                    src={netflix}
                    alt="Not found"  />
                </figure>
                <div className="card-body zoom-in1">
                    <h2 className="card-title text-2xl text-white">Netflix UI</h2>
                    <p className='text-lg text-white'>Develop a Netflix clone </p>
                    <p className=' text-white'>TECHNOLOGY USED : REACTJS, BOOTSTRAP </p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary"><a href="https://netflix-clone-git-main-dhanushs-projects-9cb2b9f9.vercel.app/" target='_blank'>Live demo</a></button>
                    <button className="btn btn-primary"><a href="https://github.com/DHANUSHG7/netflix-clone" target='_blank'>Git Hub</a></button>
                    </div>
                </div>
                </div>
                <div className="card w-85 h-[60vh] backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border
         border-white/20 rounded-2xl md:p-2 p-6 shadow-lg ">
                <figure className='zoom-in1 h-45'>
                    <img
                    src={vegii}
                    alt="Not found"  />
                </figure>
                <div className="card-body zoom-in1">
                    <h2 className="card-title text-2xl text-white">Vegii-Shop UI</h2>
                    <p className='text-lg text-white'>Develop a Vegii content website </p>
                    <p className=' text-white'>TECHNOLOGY USED : REACTJS, BOOTSTRAP </p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary"><a href="https://vegii-mern-app.vercel.app/ " target='_blank'>Live demo</a></button>
                    <button className="btn btn-primary"><a href="https://github.com/DHANUSHG7/netflix-clone" target='_blank'>Git Hub</a></button>
                    </div>
                </div>
                </div>
                <div className="card w-85 backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border
         border-white/20 rounded-2xl md:p-2 p-6 shadow-lg ">
                <figure className='zoom-in1 h-45'>
                    <img
                    src={business}
                    alt="Not found"  />
                </figure>
                <div className="card-body zoom-in1">
                    <h2 className="card-title text-2xl text-white">Business UI</h2>
                    <p className='text-lg text-white'>Develop a website for responsive business website UI</p>
                    <p className=' text-white'>TECHNOLOGY USED : HTML , CSS, JS</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary"><a href="https://dhanushg7.github.io/Business-sla/ " target='_blank'>Live demo</a></button>
                    <button className="btn btn-primary"><a href="https://github.com/DHANUSHG7/Business-sla" target='_blank'>Git Hub</a></button>
                    </div>
                </div>
                </div>
                <div className="card w-85 backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border
         border-white/20 rounded-2xl md:p-2 p-6 shadow-lg ">
                <figure className='zoom-in1 h-45'>
                    <img
                    src={mexant}
                    alt="Not found"  />
                </figure>
                <div className="card-body zoom-in1">
                    <h2 className="card-title text-2xl text-white">Mexant UI</h2>
                    <p className='text-lg text-white'>Develop a website for responsive business website UI</p>
                    <p className=' text-white'>TECHNOLOGY USED : REACT Js,BOOTSRAP</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary"><a href="https://mexant-dce40.web.app/ " target='_blank'>Live demo</a></button>
                    <button className="btn btn-primary"><a href="https://github.com/DHANUSHG7/mexant-sla" target='_blank'>Git Hub</a></button>
                    </div>
                </div>
                </div>
                <div className="card w-85 backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border
         border-white/20 rounded-2xl md:p-2 p-6 shadow-lg ">
                <figure className='zoom-in1 h-45'>
                    <img
                    src={portfolio}
                    alt="Not found"  />
                </figure>
                <div className="card-body zoom-in1">
                    <h2 className="card-title text-2xl text-white">Old Portfilio</h2>
                    <p className='text-lg text-white'>Develop a website for showcasing my skills </p>
                    <p className=' text-white'>TECHNOLOGY USED :REACT, TAILWIND</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary"><a href="https://dhanush-g.netlify.app/ " target='_blank'>Live demo</a></button>
                    <button className="btn btn-primary"><a href="https://github.com/DHANUSHG7/Dhanush-Portfolio" target='_blank'>Git Hub</a></button>
                    </div>
                </div>
                </div>
                <div className="card w-85 backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border
         border-white/20 rounded-2xl md:p-2 p-6 shadow-lg ">
                <figure className='zoom-in1 h-45'>
                    <img
                    src={villa}
                    alt="Not found"  />
                </figure>
                <div className="card-body zoom-in1">
                    <h2 className="card-title text-2xl text-white">Villa</h2>
                    <p className='text-lg text-white'>Develop a website for responsive villa website UI</p>
                    <p className=' text-white'>TECHNOLOGY USED :HTML, CSS, Js, BOOTSRAP</p>
                    <div className="card-actions justify-center">
                    <button className="btn btn-primary"><a href="https://dhanushg7.github.io/miniproject/ " target='_blank'>Live demo</a></button>
                    <button className="btn btn-primary"><a href="https://github.com/DHANUSHG7/miniproject" target='_blank'>Git Hub</a></button>
                    </div>
                </div>
                </div>

                
                
             


            </div>
        </div>

    </div>
  )
}

export default Projects