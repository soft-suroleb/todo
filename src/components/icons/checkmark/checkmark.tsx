import React from "react";
import { SvgIcon, SvgSize } from "../types";

export interface CheckmarkProps extends SvgIcon {};

export const CheckmarkIcon: React.FC<CheckmarkProps> = (props) => {
    const { 
        size = SvgSize.S,
        ...rest
    } = props;

    return (
        <svg
            {...rest}
            viewBox="0 0 24 24"
            height={size}
            width={size}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="20 6 9 17 4 12" />
        </svg>
    )
}
