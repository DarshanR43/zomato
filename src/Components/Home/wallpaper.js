import React from "react";
import logo from "./images/image01.webp";
import "./Home.css";

class Wallpaper extends React.Component {
  render() {
    return (
        <header className="a">
          <img className="bg" src={logo} alt="Zomato background" />
          <button className="three" aria-label="Login">Login</button>
          <button className="four" aria-label="Create an account">Create an account</button>
          <h1 className="logo" aria-label="Zomato logo">e!</h1>
          <h1 className="five">Find the best Restaurants, Cafes, and Bars</h1>
          <input
            type="text"
            list="cities"
            placeholder="Select the city"
            className="six"
            aria-label="Select the city"
          />
          <datalist id="cities">
            <option value="Delhi" />
            <option value="Mumbai" />
            <option value="Kolkata" />
            <option value="Chennai" />
          </datalist>
          <input
            className="search"
            type="search"
            name="Restaurants"
            id="Bars"
            placeholder="Search for Restaurants"
            aria-label="Search for Restaurants"
          />
        </header>
        
    );
  }
}

export default Wallpaper;
