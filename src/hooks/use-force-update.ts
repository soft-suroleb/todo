import React from "react";

export const useForceUpdate = () => {
    const [, forceUpdate] = React.useReducer(x => x + 1, 0);
    return forceUpdate;
}
