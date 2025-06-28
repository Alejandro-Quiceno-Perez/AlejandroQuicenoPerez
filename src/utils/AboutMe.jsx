import React from 'react'
import shortAboutMe from '../assets/data/shortAboutMe'

const AboutMe = () => {
    return (
        <div className='container-about-me'>
            {
                shortAboutMe.map((about, index) => (
                    <div key={index} className='about-me'>
                        <h2>{about.title}</h2>
                        <p>{about.shortDescription}</p>
                        <a href="http://">Ver más...</a>
                    </div>
                    
                ))
            }
        </div>
    )
}

export default AboutMe

{/* <div className="flex flex-col items-center text-center bg-[#111132] text-white border border-cyan-400 rounded-xl p-4 w-40 h-40 shadow-md hover:scale-105 transition-all duration-300">
      <img src={icon} alt={name} className="w-10 h-10 mb-3" />
      <h4 className="text-md font-semibold text-cyan-300">{name}</h4>
      <p className="text-xs text-gray-400 mt-1">{description}</p>
    </div> */}