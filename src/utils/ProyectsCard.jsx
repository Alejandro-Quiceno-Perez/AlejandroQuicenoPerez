import React from 'react'
import projects from '../assets/data/proyectsData.js'

const ProyectsCard = () => {
    return (
        <div className='cards-projects'>
            <div className="cards">
                {
                    projects.map((project, index) => (
                        <a href={project.url} className="card" key={index}>
                            <h3>{project.nameProject}</h3>
                            <p>{project.description}</p>
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default ProyectsCard
