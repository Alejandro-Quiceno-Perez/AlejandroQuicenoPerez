import React from 'react'
import './Header.css'
import AnimateText from '../utils/AnimateText.jsx'
import RedesSociales from '../utils/SocialMedia.jsx'

const Header = () => {
    
    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="header-logo">
                        <img src="/src/assets/img/img-alejo-caricatura.jpg" alt="Logo-Alejo" />
                            <a href="#projects" id="text_Animation">
                                <AnimateText text={"Software - Development"} />
                            </a>
                    </div>
                    <RedesSociales />
                </nav>
            </header>
        </div>
    )
}

export default Header
