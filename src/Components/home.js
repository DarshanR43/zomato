import React from "react";
import "./Styles/home.css";
import Wallpaper from "./wallpaper";
import Quicksearch from "./Quicksearch";

class Home extends React.Component {
  render() {
    return (
      <main>
        <Wallpaper />
        <Quicksearch />
        <footer style={{ textAlign: "center", marginTop: "2rem", color: "#888" }}>
          <small>&copy; {new Date().getFullYear()} Zomato. All rights reserved.</small>
        </footer>
      </main>
    );
  }
}

export default Home;
