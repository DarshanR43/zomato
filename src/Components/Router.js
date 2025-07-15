import React from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from "./home";
import Details from "./details";
import Filter from "./filter";

const Routing  = () =>{
    return(
        <BrowserRouter>
            {/* <Home/> */}
            <Routes>
                <Route index element={<Home />} />
                <Route path="/details" element={<Details />} />
                <Route path="/filter" element={<Filter />} />
                {/* <Route path="/Product/:pid" element={<Product />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;