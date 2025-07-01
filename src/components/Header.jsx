import React from 'react'
import '/src/styles/header.css'
import AnimateText from '../utils/AnimateText.jsx'
import RedesSociales from '../utils/SocialMedia.jsx'

const Header = () => {
    
    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="header-logo">
                        <img src="./img/img-alejo-caricatura.jpg" alt="Logo-Alejo" />
                            <a href="#projects" id="text_Animation">
                                <AnimateText text={"Software - Development"} />
                            </a>
                    </div>
                    <div className="header-links">
                        <RedesSociales />
                    </div>
                    
                </nav>
            </header>
        </div>
    )
}

export default Header
