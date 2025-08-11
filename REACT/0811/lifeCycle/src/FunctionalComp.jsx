import { useEffect, useRef, useState } from "react";

const FunctionalComp = () => {
    const [number, setNumber] = useState(0);
    const isFirstRender = useRef(true);
    const shouldUpdate = useRef(false);

    if (isFirstRender.current) {
        console.log("componentWillMount");
    }

    if (!isFirstRender.current) {
        console.log("shouldComponentUpdate");
        console.log("componentWillUpdate");
        shouldUpdate.current = true;
    }

    useEffect(() => {
        console.log("componentDidMount");
        isFirstRender.current = false;

        return () => {
            console.log("componentWillUnmount");
        };
    }, []);

    // shouldComponentUpdate
    // componentWillUpdate
    // render
    // componentDidUpdate
    useEffect(() => {
        if (shouldUpdate.current) {
            console.log("componentDidUpdate");
            shouldUpdate.current = false;
        }
    }, [number]);

    const handleClick = () => {
        setNumber((prev) => prev + 1);
    };

    console.log("render");

    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <span>{number}</span>
        </div>
    );
};

export default FunctionalComp;
