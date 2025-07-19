import React from "react";
import "./Styles/home.css";

class Wallpaper extends React.Component {
  render() {
  const {locationData} = this.props;
  console.log("Received locationData:", locationData);
    return (
      <header className="wallpaper-section">
        <img className="bg" src="./images/image01.webp" alt="Zomato background" />
        <h1 className="logo">e!</h1>
        <h1 className="title">Find the best Restaurants, Cafes, and Bars</h1>
        <select className="city-input" id="cities">
          <option key="0" value="0">Select</option>
          {Array.isArray(locationData) && locationData.length > 0 &&
            locationData.map((item, index) => (
              <option key={index} value={item.city}>
                {item.city}
              </option>
            ))
          }
        </select>
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
