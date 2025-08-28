import { createContext, useReducer } from "react";

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return { ...state, user: action.payload }

        case 'logout':
            return { ...state, user: null }
        default:
            return state;
    }
};


const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, { user: null });

    console.log('state =', state);

    return (
        <AuthContext value={{ ...state, dispatch }}>
            {children}
        </AuthContext>
    )
}


export { AuthContextProvider, AuthContext };