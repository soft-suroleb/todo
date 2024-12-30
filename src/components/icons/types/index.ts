import React from "react";

export enum SvgSize {
    S = '12px',
    M = '16px',
    L = '20px',
    XL = '26px',
}

export type SvgIcon = React.JSX.IntrinsicElements['svg'] & {
    className?: string;
    size?: SvgSize;
}
