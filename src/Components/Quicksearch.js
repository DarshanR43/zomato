import React from "react";
import "./Styles/home.css";

const categories = [
  {
    src: "./images/f1.jpg",
    title: "Breakfast",
    desc: "Start your day with exclusive breakfast options."
  },
  {
    src: "./images/f2.jpg",
    title: "Lunch",
    desc: "Enjoy delicious lunch menus from top restaurants."
  },
  {
    src: "./images/f3.jpg",
    title: "Snacks",
    desc: "Grab a quick bite with our snack selections."
  },
  {
    src: "./images/f4.jpg",
    title: "Dinner",
    desc: "End your day with a hearty dinner experience."
  },
  {
    src: "./images/f5.jpg",
    title: "Drinks",
    desc: "Find the best places for drinks and refreshments."
  },
  {
    src: "./images/f6.jpg",
    title: "Nightlife",
    desc: "Explore the vibrant nightlife and late-night eateries."
  }
];

class Quicksearch extends React.Component {
  render() {
    return (
      <section className="quicksearch">
        <div className="quicksearch-title">Quick Search</div>
        <div className="quicksearch-subtitle">Discover restaurants by type of meals</div>
        <div className="quicksearch-grid">
          {categories.map((item, index) => (
            <div className="quicksearch-card" key={index}>
              <img src={item.src} className="quicksearch-image" alt={item.title} />
              <div className="quicksearch-info">
                <div className="quicksearch-heading">{item.title}</div>
                <div className="quicksearch-description">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Quicksearch;
