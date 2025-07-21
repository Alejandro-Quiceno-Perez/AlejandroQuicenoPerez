import React from 'react'

const MusicDescription = () => {
    return (
        <div className='music-description'>
            <p>Además del desarrollo de software, tengo una profunda pasión por la música, la cual me acompaña desde muy temprana edad. A los 6 años inicié mi camino en el mundo musical como integrante de la banda de marcha de mi colegio, donde comencé a tocar instrumentos de percusión, área que ha sido mi especialidad desde entonces.

                A los 8 años aprendí a tocar piano, y a los 13 me enamoré de la batería, instrumento que se ha convertido en mi favorito y el que más me representa a nivel artístico. Desde entonces he cultivado mi crecimiento musical con constancia y entrega.

                Actualmente soy baterista en varias agrupaciones de la ciudad de Medellín, entre ellas Seback, Nuvvet y Pato el Pez, esta última una banda de punk rock que fundé junto a otros músicos locales. Con Pato el Pez hemos tenido la oportunidad de presentarnos en distintos escenarios, incluyendo nuestra participación en el Altavoz Fest 2024, uno de los festivales más importantes de la ciudad.

                La música ha sido para mí más que un pasatiempo: me ha enseñado disciplina, creatividad, trabajo en equipo y expresión emocional, habilidades que también potencian mi desempeño como desarrollador.</p>

            <div className='music-images'>
                {/* <img src="/img/cv-76.jpg" alt="Baterista en concierto" /> */}
                <a href="https://www.instagram.com/alejo_drums02/">
                    <img src="./img/cv-97.jpg" alt="Baterista en ensayo" />
                </a>
            </div>
        </div>
    )
}

export default MusicDescription
