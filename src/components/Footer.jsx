import React from 'react'
import '/src/styles/footer.css'
import '/src/styles/footerResponsive.css'
import SocialMedia from '../utils/SocialMedia'

const Footer = (nameSocial) => {
    return (
        <footer>
            <div className="footer-container">

                <div className="social-media">
                    <SocialMedia />
                </div>
                <p className="copy">&copy; 2023 Alejandro Quiceno Perez</p>
            </div>
        </footer>
    )
}

export default Footer
