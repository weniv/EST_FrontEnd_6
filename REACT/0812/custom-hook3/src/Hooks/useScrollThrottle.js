import { useState, useEffect } from "react";

export function useScrollThrottle() {
    const [isBottom, setIsBottom] = useState();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setIsBottom(window.innerHeight + document.documentElement.scrollTop + 10 >= document.documentElement.offsetHeight);
            console.log("scrolling...");
        });
    }, []);

    return isBottom;
}
