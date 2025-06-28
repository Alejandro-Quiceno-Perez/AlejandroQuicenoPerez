import React from 'react'
import './article.css'
import WelcomeBanner from '../utils/WelcomeBanner'
import AboutMe from '../utils/AboutMe'
import Skills from '../utils/Skills'

const Article = () => {
    return (
        <div>
            <WelcomeBanner />
            <div className="container-about">
                <AboutMe />
                <Skills />

            </div>
        </div>
    )
}

export default Article
