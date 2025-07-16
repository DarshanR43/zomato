import React from "react";
import Carousel from "./carousel";
import TabsSection from "./react_tabs";
import "./Styles/details.css";


const Details = () => {
  return (
    <div>
        <div className="details-page">
        <Carousel />
            <div className="header">
            <h2>The Big Chill Cakery</h2>
            <button className="order-btn">Place Online Order</button>
        </div>
      <TabsSection />
    </div>
    </div>
  );
};

export default Details;
