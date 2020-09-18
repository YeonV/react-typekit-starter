import React from 'react'
import './Button.css';

export interface ButtonProps {
    backgroundColor: string
    color: string
}

const Button: React.FC<ButtonProps> = ({ backgroundColor, color }) => {
    return (
        <div className={'BasicButton'} style={{ backgroundColor: backgroundColor, color: color }}>
            this will be a button
        </div>
    )
}

export default Button
