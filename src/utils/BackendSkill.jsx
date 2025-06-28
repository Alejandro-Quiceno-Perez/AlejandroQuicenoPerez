import React from 'react'
import skillBackend from '../assets/data/backendSkill'

const BackendSkill = () => {
    return (
        <div className='container--skill'>
            {
                skillBackend.map((skill, index) => (
                    <div key={index} className='skill-card'>
                        <img src={skill.icon} alt={skill.name} className='skill-icon' />
                        <h3 className="skill-title">{skill.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default BackendSkill
