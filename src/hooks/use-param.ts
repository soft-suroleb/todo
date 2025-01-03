import { useState } from "react";

export function useParam<T>(name: string, defaultValue?: T): [T, (param: T) => void] {
    const url = new URL(window.location.href);
    const [param, setParam] = useState<T>(JSON.parse(url.searchParams.get(name)) || defaultValue);

    const changeParam = (newParam: T) => {
        setParam(_ => {
            const currentUrl = new URL(window.location.href);
            const jsParam = JSON.stringify(newParam);
            if (!newParam || ['', '{}', '[]'].includes(jsParam)) {
                currentUrl.searchParams.delete(name);
            } else {
                currentUrl.searchParams.set(name, jsParam);
            }
            window.history.pushState(null, '', currentUrl.toString());

            return newParam;
        })
    }

    return [ param, changeParam ];
}
