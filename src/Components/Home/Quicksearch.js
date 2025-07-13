import React from "react";
import i1 from "./images/f1.jpg";
import i2 from "./images/f2.jpg";
import i3 from "./images/f3.jpg";
import i4 from "./images/f4.jpg";
import i5 from "./images/f5.jpg";
import i6 from "./images/f6.jpg";
import "./Home.css";

class Quicksearch extends React.Component {
  render() {
    return (
        <section>
          <h1>Quick Search</h1>
          <h5 className="seven">Discover restaurants by type of meals</h5>
          <div className="container">
            <div className="box">
              <img className="image" src={i1} alt="Breakfast" />
              <h1 className="heading">Breakfast</h1>
              <p className="description">Start your day with exclusive breakfast options.</p>
            </div>
            <div className="box">
              <img className="image" src={i2} alt="Lunch" />
              <h1 className="heading">Lunch</h1>
              <p className="description">Enjoy delicious lunch menus from top restaurants.</p>
            </div>
            <div className="box">
              <img className="image" src={i3} alt="Snacks" />
              <h1 className="heading">Snacks</h1>
              <p className="description">Grab a quick bite with our snack selections.</p>
            </div>
            <div className="box">
              <img className="image" src={i4} alt="Dinner" />
              <h1 className="heading">Dinner</h1>
              <p className="description">End your day with a hearty dinner experience.</p>
            </div>
            <div className="box">
              <img className="image" src={i5} alt="Drinks" />
              <h1 className="heading">Drinks</h1>
              <p className="description">Find the best places for drinks and refreshments.</p>
            </div>
            <div className="box">
              <img className="image" src={i6} alt="Night life" />
              <h1 className="heading">Night life</h1>
              <p className="description">Explore the vibrant night life and late-night eateries.</p>
            </div>
          </div>
        </section>
        
    );
  }
}

export default Quicksearch;
