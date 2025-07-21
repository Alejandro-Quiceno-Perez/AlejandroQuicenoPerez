import React from 'react'
import '/src/styles/header.css'
import '/src/styles/headerResponsive.css'
import AnimateText from '../utils/AnimateText.jsx'
import RedesSociales from '../utils/SocialMedia.jsx'
import { Link } from 'react-router-dom'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const  toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div>
            <header>
                <nav className="navbar">
                    <div className="header-logo">
                        <img src="./img/img-alejo-caricatura.jpg" alt="Logo-Alejo" />
                        <Link to={`/AlejandroQuicenoPerez/`} id="text_Animation">
                            <AnimateText text={"Software - Development"} />
                        </Link>
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
