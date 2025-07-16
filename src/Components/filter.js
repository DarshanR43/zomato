import React, { useState } from "react";
import "./Styles/filter.css";

const Filter = () => {
  const [location, setLocation] = useState("");

  const locations = ["Fort", "Bandra", "Andheri", "Colaba"];
  const places = [
    {
      name: "The Big Chill Cakery",
      location: "FORT",
      address: "Shop 1, Plot D, Samruddhi Complex, Chincholi ...",
      cuisines: "Bakery",
      cost: 700,
    },
    {
      name: "The Bake Shop",
      location: "FORT",
      address: "Shop 1, Plot D, Samruddhi Complex, Chincholi ...",
      cuisines: "Bakery",
      cost: 700,
    },
  ];

  return (
    <div className="page">
      <h2 className="title">Breakfast Places in Mumbai</h2>
      <div className="container">
        <aside className="filters">
          <h3>Filters</h3>
          <label>Select Location</label>
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">Select Location</option>
            {locations.map((loc) => (
              <option key={loc}>{loc}</option>
            ))}
          </select>

          <div className="filter-group">
            <h4>Cuisine</h4>
            {["North Indian", "South Indian", "Chinese", "Fast food", "Street food"].map((cuisine) => (
              <div key={cuisine}>
                <input type="checkbox" id={cuisine} />
                <label htmlFor={cuisine}>{cuisine}</label>
              </div>
            ))}
          </div>

          <div className="filter-group">
            <h4>Cost For Two</h4>
            {[
              "Less than ₹500",
              "₹500 to ₹1000",
              "₹1000 to ₹1500",
              "₹1500 to ₹2000",
              "₹2000+",
            ].map((range, index) => (
              <div key={index}>
                <input type="radio" name="cost" id={`cost${index}`} />
                <label htmlFor={`cost${index}`}>{range}</label>
              </div>
            ))}
          </div>

          <div className="filter-group">
            <h4>Sort</h4>
            <div>
              <input type="radio" name="sort" id="lowToHigh" />
              <label htmlFor="lowToHigh">Price low to high</label>
            </div>
            <div>
              <input type="radio" name="sort" id="highToLow" />
              <label htmlFor="highToLow">Price high to low</label>
            </div>
          </div>
        </aside>

        <main className="results">
          {places.map((place, index) => (
            <div className="card" key={index}>
              <img src="https://via.placeholder.com/100" alt="Food" />
              <div className="card-content">
                <h3>{place.name}</h3>
                <p className="location">{place.location}</p>
                <p className="address">{place.address}</p>
                <hr />
                <p>CUISINES: <span>{place.cuisines}</span></p>
                <p>COST FOR TWO: ₹{place.cost}</p>
              </div>
            </div>
          ))}

          <div className="pagination">
            <button>{`<`}</button>
            {[1, 2, 3, 4, 5].map((num) => (
              <button key={num} className={num === 1 ? "active" : ""}>
                {num}
              </button>
            ))}
            <button>{`>`}</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Filter;
