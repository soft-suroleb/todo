import React from "react";
import { SvgIcon, SvgSize } from "../types";

export interface TrashIconProps extends SvgIcon {};

export const TrashIcon: React.FC<TrashIconProps> = (props) => {
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
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
    )
}
