import React from "react";
import "./Styles/home.css";
import Wallpaper from "./wallpaper";
import Quicksearch from "./Quicksearch";

class Home extends React.Component {
  render() {
    return (
      <main className="home-main">
        <Wallpaper />
        <section className="quicksearch-section">
          <Quicksearch />
        </section>
        <footer className="home-footer">
          <small>&copy; {new Date().getFullYear()} Zomato. All rights reserved.</small>
        </footer>
      </main>
    );
  }
}

export default Home;
