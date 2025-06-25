import React from 'react'

const WelcomeBanner = () => {
    return (
        <div className="container-info">
            <section className="container-title">
                <h1>Hi, I'm Alejandro Quiceno Perez</h1>
                <p>I am a software developer, technology lover. I am committed to continuous improvement.
                    <br /> <span>This is my portafolio!</span>
                </p>
            </section>
            <section>
                <div className="container-img">
                    <img src="./src/assets/img/Soft-Alejo-fondo.png" alt="Alejandro Quiceno Perez" />
                </div>
            </section>
        </div>
    )
}

export default WelcomeBanner
