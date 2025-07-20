import React from "react";
import axios from "axios";
import "./Styles/home.css";
import Wallpaper from "./wallpaper";
import Quicksearch from "./Quicksearch";

class Home extends React.Component {
  state = { locations: [] };

  componentDidMount() {
    axios.get("http://localhost:3000/in1.json")
      .then(response => this.setState({ locations: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    const { locations } = this.state;
    return (
      <>
        <Wallpaper locations={locations} />
        <Quicksearch />
        <footer className="home-footer">
          © 2025 Food Explorer
        </footer>
      </>
    );
  }
}

export default Home;
