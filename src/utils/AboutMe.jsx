import React from 'react'
import shortAboutMe from '../assets/data/shortAboutMe'
import { Link } from 'react-router-dom'

const AboutMe = () => {
    return (
        <div className='container-about-me'>
            {
                shortAboutMe.map((about, index) => (
                    <div key={index} className='about-me'>
                        <h2>{about.title}</h2>
                        <p>{about.shortDescription}</p>
                        <Link to={`/aboutPage`} className='verMas'>Ver mas...</Link>
                    </div>
                    
                ))
            }
        </div>
    )
}

export default AboutMe