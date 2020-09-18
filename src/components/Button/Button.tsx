import React from 'react'
import './Button.css';

interface Props {
    color: string
}

const Button = (props: Props) => {
    return (
        <div className={'BasicButton'} style={{backgroundColor: props.color}}>
            this will be a button
        </div>
    )
}

export default Button
