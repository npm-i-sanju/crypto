import { useState, useEffect } from "react";

const uselocalStorage = () => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return null;
        }
    });

    const setValue = ()=>{
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);   
        }
    }

    return [storedValue, setValue];
};

export default uselocalStorage;