import React from "react"
import './button.scss';

export interface ButtonProps {
    text: string;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button
            className='button'
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}
