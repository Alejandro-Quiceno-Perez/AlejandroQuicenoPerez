import React from 'react'
import ProyectsCard from './ProyectsCard'

const Proyects = () => {
    return (
        <div className='container-projects'>
            <section className="projects-info">
                <h3>Mis proyectos</h3>
                <p>"Estos son los proyectos más destacados que he desarrollado a lo largo de mi carrera como desarrollador web.
                    <span> <a href="https://www.linkedin.com/in/alejandro-quiceno-p%C3%A9rez/">¡Descúbrelos y contáctame aquí!</a>"</span>
                </p>
            </section>
            <ProyectsCard />
        </div>
    )
}

export default Proyects
