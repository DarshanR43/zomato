import React from "react";
import "./Styles/home.css";

class Wallpaper extends React.Component {
  render() {
    return (
      <header className="wallpaper-section">
        <img className="bg" src="./images/image01.webp" alt="Zomato background" />
        <button className="login-btn" aria-label="Login">Login</button>
        <button className="signup-btn" aria-label="Create an account">Create an account</button>
        <h1 className="logo">e!</h1>
        <h1 className="title">Find the best Restaurants, Cafes, and Bars</h1>
        <input
          type="text"
          list="cities"
          placeholder="Select the city"
          className="city-input"
          aria-label="Select the city"
        />
        <datalist id="cities">
          <option value="Delhi" />
          <option value="Mumbai" />
          <option value="Kolkata" />
          <option value="Chennai" />
        </datalist>
        <input
          className="search-input"
          type="search"
          name="Restaurants"
          placeholder="Search for Restaurants"
          aria-label="Search for Restaurants"
        />
      </header>
    );
  }
}

export default Wallpaper;
