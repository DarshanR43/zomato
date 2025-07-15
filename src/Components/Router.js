import React from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
// import Header from './header'
import Home from "./home";
import Details from "./details";
import Product from "./filter";

const Routing  = () =>{
    return(
        <BrowserRouter>
            {/* <Home/> */}
            <Routes>
                <Route index element={<Home />} />
                <Route path="/About" element={<Details />} />
                <Route path="/Content" element={<Product />} />
                <Route path="/Product/:pid" element={<Product />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;