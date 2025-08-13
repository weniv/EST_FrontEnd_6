import { useMouseLocation } from "./Hooks/useMouseLocation";
import { useScroll } from "./Hooks/useScroll";
import { useScrollObserver } from "./Hooks/useScrollObserver";
import { useScrollThrottle } from "./Hooks/useScrollThrottle";

function App() {
    // const mouseLocation = useMouseLocation({ x: 0, y: 0 });
    // const isBottom = useScroll();
    // console.log("useScrollThrottle", useScrollThrottle());
    // useScrollThrottle();
    const isBottom = useScrollObserver();
    console.log("isBottom: ", isBottom);

    return <div style={{ backgroundColor: "blue", height: 1000, width: 50 }}></div>;
}

export default App;
