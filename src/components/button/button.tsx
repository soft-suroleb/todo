import React from "react"
import './button.scss';

import { cn } from "../../utils";
const cls = cn('button');

export enum ButtonView {
    Primary = 'primary',
    Secondary = 'secondary',
}

export interface ButtonProps {
    className?: string;
    text: string;
    view: ButtonView;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <button
            className={cls({view: props.view}, props.className)}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}
