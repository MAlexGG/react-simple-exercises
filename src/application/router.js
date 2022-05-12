import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Func from "../pages/func";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/func" element={<Func />} />
            </Routes>
    </BrowserRouter>
    )
} 
   
export default Router;