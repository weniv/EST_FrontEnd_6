import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import './App.css'
import { useAuthContext } from "./hooks/useAuthContext"

function App() {

    const { isAuthReady, user } = useAuthContext();

    return (
        <div className="App">
            {isAuthReady ?
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={user ? <Home /> : <Navigate to='/login' replace={true} />}></Route>
                        <Route path='/login' element={!user ? <Login /> : <Navigate to='/' replace={true} />}></Route>
                        <Route path="/signup" element={!user ? <Signup /> : <Navigate to='/' replace={true} />}></Route>
                    </Routes>
                </BrowserRouter> : "loading..."}
        </div>
    )
}

export default App
