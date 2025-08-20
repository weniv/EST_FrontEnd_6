import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, removeFromCart, clearCart, selectCartTotal } from "../store/cartReducer";

export default function Cart() {
    const dispatch = useDispatch();
    const items = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);
    console.log(total);

    return (
        <div>
            <h2>cart</h2>

            {items.length === 0 ? (
                <p>장바구니가 비어있습니다.</p>
            ) : (
                <>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>
                                <p>{item.name}</p>
                                <p>{item.price.toLocaleString()}원</p>
                                <button onClick={() => dispatch(removeFromCart(item.id))}>제거</button>
                            </li>
                        ))}
                    </ul>
                    <div>합계: {total.toLocaleString()}원</div>
                    <button onClick={() => dispatch(clearCart())}>전체 비우기</button>
                </>
            )}
        </div>
    );
}
