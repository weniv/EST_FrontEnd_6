import { useMouseLocation } from "./Hooks/useMouseLocation";
import { useScroll } from "./Hooks/useScroll";

function App() {
    const mouseLocation = useMouseLocation({ x: 0, y: 0 });
    const isBottom = useScroll();

    return <div style={{ backgroundColor: "blue", height: 1000, width: 50 }}></div>;
}

export default App;
