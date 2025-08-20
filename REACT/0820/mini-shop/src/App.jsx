import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";
import { selectCartCount } from "./store/cartReducer";

function Header() {
    const count = useSelector(selectCartCount);
    return (
        <header style={{ display: "flex", gap: 20 }}>
            <Link to="/">Shop</Link>
            <Link to="/cart">Cart ({count})</Link>
        </header>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main style={{ padding: 16 }}>
                <Routes>
                    <Route path="/" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
