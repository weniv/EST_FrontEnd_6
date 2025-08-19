import { createContext, useState } from "react";

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

    return <UserContext>{children}</UserContext>;
};

function App() {
    return <>Hello Vite-React!</>;
}

export default App;
