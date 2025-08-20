// 액션 타입 상수
export const ADD_TO_CART = "cart/ADD_TO_CART";
export const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART";
export const CLEAR_CART = "cart/CLEAR_CART";

// action 생성자
export const addToCart = (product) => ({ type: ADD_TO_CART, payload: product });
export const removeFromCart = (id) => ({ type: REMOVE_FROM_CART, payload: id });
export const clearCart = () => ({ type: CLEAR_CART });

// 초기 상태값
const initialState = {
    items: [], // {id, name, price}
};

// 리듀서 함수
export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            const exists = state.items.some((item) => item.id === action.payload.id);

            if (exists) return state;

            return { ...state, items: [...state.items, action.payload] };
        }
        case REMOVE_FROM_CART:
            return { ...state, items: state.items.filter((item) => item.id !== action.payload) };
        case CLEAR_CART:
            return { ...state, items: [] };
        default:
            return state;
    }
}

// 장바구니에 담긴 상품 전체 배열 상태 반환
export const selectCartItems = (state) => state.items;

// 장바구니에 담긴 상품 개수 상태 반환
export const selectCartCount = (state) => state.items.length;

// 모든 상품의 가격을 합산한 총 금액 상태 반환
export const selectCartTotal = (state) => state.items.reduce((sum, item) => sum + item.price, 0);
