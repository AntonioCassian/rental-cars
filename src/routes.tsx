import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Descriton } from "./Pages/Descrition";
import { Toyota } from "./Pages/Toyota";
import { Volkswagen } from "./Pages/Vowksvagen";
import { Fiat } from "./Pages/Fiat";
import { Chevrolet } from "./Pages/Chevrolet";
import { Hyundai } from "./Pages/Hyundai";

export const Routs = () => {
    return (
        <Router>
            <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/des"  element={<Descriton />} />
                <Route path="/toyota"  element={<Toyota />} />
                <Route path="/volkswage"  element={<Volkswagen />} />
                <Route path="/fiat"  element={<Fiat />} />
                <Route path="/chevrolet"  element={<Chevrolet />} />
                <Route path="/Hyundai"  element={<Hyundai />} />
            </Routes>
        </Router>
    )
}

