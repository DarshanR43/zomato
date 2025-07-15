// components/Details.js
import React from "react";
import "./Styles/details.css";
import Header from "./header";

const Details = () => {
  return (
    <div>
        <Header/>
        <div className="details-container">  
            <div className="image-section">
                <img
                src="https://img.freepik.com/premium-photo/idli-sambar-idly-popular-south-indian-breakfast_466689-34582.jpg"
                alt="Idli with chutney"
                className="restaurant-image"
                />
            </div>

            <div className="info-section">
                <h2 className="restaurant-name">The Big Chill Cakery</h2>
                <div className="tabs">
                <span className="tab active">Overview</span>
                <span className="tab">Contact</span>
                </div>

                <div className="contact-section">
                <p className="label">Phone Number</p>
                <p className="phone-number">+91 3423423216</p>

                <p className="label">The Big Chill Cakery</p>
                <p className="address">
                    Shop 1, Plot D, Samruddhi Complex, Chincholi, <br />
                    Mumbai-400002, Maharashtra
                </p>

                <button className="order-button">Place Online Order</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Details;
