import React from 'react'
import skillFrontend from '../assets/data/fontendSkill'

const FrontendSkill = () => {
    return (
        <div className='container--skill'>
            {
                skillFrontend.map((skill, index) => (
                    <div key={index} className='skill-card'>
                        <img src={skill.icon} alt={skill.name} className='skill-icon' />
                        <h3 className="skill-title">{skill.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}

export default FrontendSkill
