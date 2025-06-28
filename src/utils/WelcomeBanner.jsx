import React from 'react'

const WelcomeBanner = () => {
    return (
        <div className="container-info">
            <section className="container-title">
                <h1>Hola, Soy Alejandro Quiceno Perez</h1>
                <p>Soy un desarrollador de software, apasionado por la tecnología. Estoy comprometido con la mejora continua.
                    <br /> <span>Este es mi portafolio!</span>
                </p>
            </section>
            <section>
                <div className="container-img">
                    <img src="./img/Soft-Alejo-fondo.png" alt="Alejandro Quiceno Perez" />
                </div>
            </section>
        </div>
    )
}

export default WelcomeBanner
