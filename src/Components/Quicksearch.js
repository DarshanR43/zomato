import React from "react";
import "./Styles/home.css";

class Quicksearch extends React.Component {
  render() {
    return (
        <section>
          <h1>Quick Search</h1>
          <h5 className="seven">Discover restaurants by type of meals</h5>
          <div className="container">
            <div className="box">
              <img className="image" src="./images/f1.jpg" alt="Breakfast" />
              <h1 className="heading">Breakfast</h1>
              <p className="description">Start your day with exclusive breakfast options.</p>
            </div>
            <div className="box">
              <img className="image" src="./images/f1.jpg" alt="Lunch" />
              <h1 className="heading">Lunch</h1>
              <p className="description">Enjoy delicious lunch menus from top restaurants.</p>
            </div>
            <div className="box">
              <img className="image" src="./images/f1.jpg" alt="Snacks" />
              <h1 className="heading">Snacks</h1>
              <p className="description">Grab a quick bite with our snack selections.</p>
            </div>
            <div className="box">
              <img className="image" src="./images/f1.jpg" alt="Dinner" />
              <h1 className="heading">Dinner</h1>
              <p className="description">End your day with a hearty dinner experience.</p>
            </div>
            <div className="box">
              <img className="image" src="./images/f1.jpg" alt="Drinks" />
              <h1 className="heading">Drinks</h1>
              <p className="description">Find the best places for drinks and refreshments.</p>
            </div>
            <div className="box">
              <img className="image" src="./images/f1.jpg" alt="Night life" />
              <h1 className="heading">Night life</h1>
              <p className="description">Explore the vibrant night life and late-night eateries.</p>
            </div>
          </div>
        </section>
        
    );
  }
}

export default Quicksearch;
