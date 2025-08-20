import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItems } from "../store/cartReducer";
const PRODUCTS = [
    { id: 1, name: "Keyboard", price: 49000 },
    { id: 2, name: "Mouse", price: 29000 },
    { id: 3, name: "Monitor", price: 199000 },
];

export default function Shop() {
    const dispatch = useDispatch();
    const items = useSelector(selectCartItems);

    const inCart = (id) => items.some((item) => item.id === id);
    return (
        <div>
            <h2>shop</h2>
            <ul>
                {PRODUCTS.map((product) => (
                    <li key={product.id}>
                        <div>{product.name}</div>
                        <div>{product.price.toLocaleString()}원</div>
                        <button disabled={inCart(product.id)} onClick={() => dispatch(addToCart(product))}>
                            {inCart(product.id) ? "담김" : "장바구니 담기"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
