import React from "react";
import "./Styles/home.css";

const categories = [
  { src: "./images/f1.jpg", title: "Breakfast", desc: "Start your day with exclusive breakfast options." },
  { src: "./images/f2.jpg", title: "Lunch", desc: "Enjoy delicious lunch menus from top restaurants." },
  { src: "./images/f3.jpg", title: "Snacks", desc: "Grab a quick bite with our snack selections." },
  { src: "./images/f4.jpg", title: "Dinner", desc: "End your day with a hearty dinner experience." },
  { src: "./images/f5.jpg", title: "Drinks", desc: "Find the best places for drinks and refreshments." },
  { src: "./images/f6.jpg", title: "Nightlife", desc: "Explore the vibrant night life and late-night eateries." }
];

class Quicksearch extends React.Component {
  render() {
    return (
      <section className="quicksearch">
        <h1 className="quicksearch-title">Quick Search</h1>
        <h5 className="quicksearch-subtitle">Discover restaurants by type of meals</h5>
        <div className="quicksearch-grid">
          {categories.map((item, index) => (
            <div className="quicksearch-card" key={index}>
              <img className="quicksearch-image" src={item.src} alt={item.title} />
              <div className="quicksearch-info">
                <h2 className="quicksearch-heading">{item.title}</h2>
                <p className="quicksearch-description">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Quicksearch;
