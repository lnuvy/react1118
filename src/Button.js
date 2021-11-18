import React from "react";
import './Button.css'

function Button({...rest}) {

    const { handleClick, position, size, color, children } = rest

    return <button onClick={handleClick} className={`Button ${size} ${color} ${position}`}>{children}</button>
}

export default Button;

Button.defaultProps = {
    size: 'medium',
    color: 'tomato'
}