import React from "react";
import axios from "axios";
import "./Styles/home.css";
import Wallpaper from "./wallpaper";
import Quicksearch from "./Quicksearch";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://localhost:3000/in.json",
      headers: {
        "X-CSCAPI-KEY": "API_KEY",
      },
    })
      .then((response) => {
        this.setState({ locations: response.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { locations } = this.state;

    return (
      <main className="home-main">
        <Wallpaper locationData={locations} /> 
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
