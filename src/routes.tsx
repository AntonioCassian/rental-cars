import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";

export const Routs = () => {
    return (
        <Router>
            <Routes>
                <Route path="/"  element={<Home/>} />
            </Routes>
        </Router>
    )
}

