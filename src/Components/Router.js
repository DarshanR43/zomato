import React from "react";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from "./home";
import Details from "./details";
import Filter from "./filter";
import Header from "./header";

const Routing  = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/details" element={<Details />} />
                <Route path="/filter" element={<Filter />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;