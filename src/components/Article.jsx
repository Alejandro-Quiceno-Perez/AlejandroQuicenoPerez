import React from 'react'
import '/src/styles/article.css'
import '/src/styles/articleResponsive.css'
import WelcomeBanner from '../utils/WelcomeBanner'
import AboutMe from '../utils/AboutMe'
import Skills from '../utils/Skills'
import Proyects from '../utils/Proyects'

const Article = () => {
    return (
        <div>
            <WelcomeBanner />
            <div className="container-about">
                <AboutMe />
                <Skills />
            </div>
            <div className="container-projects">
                <Proyects />
            </div>
        </div>
    )
}

export default Article
