import React from "react";
import axios from "axios";
import "./Styles/home.css";

class Wallpaper extends React.Component {
  state = {
    restaurants: [],
    inputText: '',
    suggestions: []
  };

  handleLocation = (event) => {
    const locationId = Number(event.target.value);
    axios.get("http://localhost:3000/in.json")
      .then(response => {
        const filtered = response.data.filter(r => r.id === locationId);
        this.setState({
          restaurants: filtered,
          inputText: '',
          suggestions: []
        });
      })
      .catch(err => console.log(err));
  };

  handleSearch = (event) => {
    const inputText = event.target.value;
    const suggestions = this.state.restaurants.filter(item =>
      item.restaurant.toLowerCase().includes(inputText.toLowerCase())
    );
    this.setState({ inputText, suggestions });
  };

  handleSelect = (item) => {
    this.setState({
      inputText: `${item.restaurant} - ${item.place}, ${item.city}`,
      suggestions: []
    });
  };

  renderSuggestions() {
    const { suggestions, inputText } = this.state;
    if (!inputText) return null;
    if (suggestions.length === 0) {
      return (
        <ul className="suggestion-list">
          <li>No suggestions found</li>
        </ul>
      );
    }
    return (
      <ul className="suggestion-list">
        {suggestions.map(item => (
          <li key={item.restaurant + item.place} onClick={() => this.handleSelect(item)}>
            {item.restaurant} - {item.place}, {item.city}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { locations } = this.props;
    const { inputText } = this.state;

    return (
      <div className="wallpaper-section">
        <img className="bg" src="./images/image01.webp" alt="Zomato background" />
        <center>
        <h1 className="logo">e!</h1>
        <h1 className="title">Find the best restaurants near you</h1></center>
        <select className="city-input" onChange={this.handleLocation} defaultValue="">
          <option value="" disabled>Select a location</option>
          {locations.map(loc => (
            <option key={loc.id} value={loc.id}>
              {loc.place}, {loc.city}
            </option>
          ))}
        </select>
        <input
          className="search-input"
          type="text"
          placeholder="Search restaurant"
          value={inputText}
          onChange={this.handleSearch}
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default Wallpaper;
