import React, {useEffect} from 'react';

const useKeyDown = (code, callback) => {
    useEffect(() => {
        const handleKeyDown = (ev) => {
            if (ev.code === code) {
                callback();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => { window.removeEventListener("keydown", handleKeyDown)
        }; 
    })
    return;  
};

export default useKeyDown; 