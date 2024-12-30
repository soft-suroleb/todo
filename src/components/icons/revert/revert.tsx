import React from "react";
import { SvgIcon, SvgSize } from "../types";

export interface RevertIconProps extends SvgIcon {};

export const RevertIcon: React.FC<RevertIconProps> = (props) => {
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
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
        </svg>
    )
}
