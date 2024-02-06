import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Descriton } from "./Pages/Descrition";
import { Toyota } from "./Pages/Toyota";

export const Routs = () => {
    return (
        <Router>
            <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/des"  element={<Descriton />} />
                <Route path="/toyota"  element={<Toyota />} />
            </Routes>
        </Router>
    )
}

