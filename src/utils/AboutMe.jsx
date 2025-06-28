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