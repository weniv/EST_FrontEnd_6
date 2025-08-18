import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import App from "./App2.jsx";
import TodoApp from "./App3.jsx";

createRoot(document.getElementById("root")).render(
    // <StrictMode>
    <>
        {/* <App /> */}
        <TodoApp />
    </>
    // </StrictMode>,
);
