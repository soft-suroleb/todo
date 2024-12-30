import React from "react";
import { SvgIcon, SvgSize } from "../types";

export interface EditIconProps extends SvgIcon {};

export const EditIcon: React.FC<EditIconProps> = (props) => {
    const { 
        size = SvgSize.S,
        ...rest
    } = props;

    return (
        <svg
            {...rest}
            height={size}
            width={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round" 
        >
            <polygon points="16 3 21 8 8 21 3 21 3 16 16 3" />
        </svg>
    )
}