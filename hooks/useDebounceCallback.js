import { useState, useEffect } from "react";

export default function useDebounceCallback(callback, delay) {
    const [debouncedCallback, setDebouncedCallback] = useState(null);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedCallback(callback);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [callback, delay]);

    return debouncedCallback;
}
