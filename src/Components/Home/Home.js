import React from "react";
import logo from "./images/image01.webp";
import i1 from "./images/f1.jpg";
import i2 from "./images/f2.jpg";
import i3 from "./images/f3.jpg"; 
import i4 from "./images/f4.jpg";
import i5 from "./images/f5.jpg";
import i6 from "./images/f6.jpg";
import "./Home.css";
class Home extends React.Component{
  render(){
    return (
      <div>
      <div className="a">
        <img className="bg" src={logo} alt="" srcset=""/>
        
        <button className="three">Login</button>
        <button className="four"> Create an account</button>
        <br/>
        <br/>
        <br/>
        <h1 className="logo">e!</h1>
        <h1 className="five">Find the best Restaurants, cafes, and Bars</h1>
        <input  type="text" list="cities" placeholder="Select the city" className="six">
        <datalist id="cities">
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Chennai">Chennai</option>
        </datalist>
        </input>
        
        <input className="search" type="search" name="Restaurants" id="Bars" placeholder="Search for Restaurants">
        </input>
      </div>
      <h1>Quick Search</h1>
      <h5 className="seven">Discover the restaurants by type of meals</h5>
      <div className="container">
        <div className="box">
            <img className="image" src={i1} alt=""/>
            <h1 className="heading"> Breakfast  </h1>
            <p className="description"> Start your day with exclusive Breakfast option </p>
        </div>
        <div className="box">
            <img className="image" src={i2} alt=""/>
            <h1 className="heading"> Lunch</h1>
            <p className="description">Start your day with exclusive Breakfast option </p>
        </div>
        <div className="box">
            <img className="image" src={i3} alt=""/>
            <h1 className="heading"> Snacks</h1>
            <p className="description">Start your day with exclusive Breakfast option </p>
        </div>
        <div className="box">
            <img className="image" src={i4} alt=""/>
            <h1 className="heading">Dinner</h1>
            <p className="description">Start your day with exclusive Breakfast option </p>
        </div>
        <div className="box">
            <img className="image" src={i5} alt=""/>
            <h1 className="heading">Drinks</h1>
            <p className="description">Start your day with exclusive Breakfast option</p>
            
        </div>
        <div className="box">
            <img className="image" src={i6} alt=""/>
            <h1 className="heading">Night life</h1>
            <p className="description">Start your day with exclusive Breakfast option</p>
        </div>
      </div>
    </div>
    );
  }
};
export default Home;
