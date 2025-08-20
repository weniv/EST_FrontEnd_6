import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const initUserData = {
    name: "전유진",
    email: "zeezee@email.com",
    cart: {
        items: [],
        totalPrice: 0,
    },
};

const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(initUserData);

    const updateCartTotal = (newTotal) => {
        setUserData((prev) => {
            return {
                ...prev,
                cart: {
                    ...prev.cart,
                    totalPrice: newTotal,
                },
            };
        });
    };

    return <UserContext value={{ userData, updateCartTotal }}>{children}</UserContext>;
};

const CartTotal = () => {
    console.log("CartTotal 렌더링");

    const { userData } = useContext(UserContext);

    return <div>총액: {userData.cart.totalPrice}</div>;
};

const UserName = () => {
    console.log("UserName 렌더링");

    const { userData } = useContext(UserContext);

    return <div>사용자: {userData.name}</div>;
};

const UpdateCart = () => {
    console.log("UpdateCart 렌더링");
    const { updateCartTotal } = useContext(UserContext);

    return <button onClick={() => updateCartTotal(Math.random() * 1000)}>장바구니 업데이트</button>;
};

function App() {
    return (
        <UserProvider>
            <CartTotal />
            <UserName />
            <UpdateCart />
        </UserProvider>
    );
}

export default App;
