import React from 'react'
import redesData from '../assets/data/redes'

const RedesSociales = () => {

    return (
        <ul>
            {redesData.map((redes, index) => (
                <li key={index}>
                    <a href={redes.url} target="_blank" rel="noopener noreferrer">
                        <i className={redes.icon}></i>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default RedesSociales
