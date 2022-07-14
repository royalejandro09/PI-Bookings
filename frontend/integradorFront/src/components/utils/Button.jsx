import React from 'react'
import "styles/base/assets.css"

const Button = ({children, filled, hidden, type, onClick, neon}) => {
    return (
        <>
            <button type={type} className={`button ${filled && 'button--filled'}
            ${hidden}`} onClick={onClick}>{children}</button>
        </>
    )
}

export default Button