import React from 'react'

const AnimateText = ({ text }) => {
    return (
        <span id='text_Animation'> 
            {
                text.split("").map((letra,index) => (
                    <span key={index}
                        style={{
                            transitionDelay: `${index * 10}ms`,
                            filter: `hue-rotate(${index * -1}deg)`,
                            display: 'inline-block'
                        }}
                    >
                        {letra === ' ' ? "\u00A0" : letra /* Non-breaking space for better spacing */}
                    </span>
                ))
            }
        </span>
    )
}

export default AnimateText
