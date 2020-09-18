import React from 'react'
import './Button.css';

export interface ButtonProps {
    color: string
}

const Button: React.FC<ButtonProps> = ({color}) => {
    return (
        <div className={'BasicButton'} style={{backgroundColor: color}}>
            this will be a button
        </div>
    )
}

export default Button
