import React from "react";

class Filter extends React.Component{
    render(){
        return(
            <div>
                <div className="div">
                    <div className="div1">
                        <h1 className="logo">e!</h1>
                        <button className="login">login</button>
                        <button className="create"> create an account</button>
                    </div>
                </div>
                <div className="div2">
                    <h1 className="heading1">Breakfast places in Mumbai</h1>
                    <div className="smallbox">
                        <input type="search" name="Location" list="sort" placeholder="Filter\Sort" className="smallbox"/>
                        <datalist id="sort">
                            <option value="Filter">Filter</option>
                            <option value="Sort">Sort</option>
                            
                        </datalist>
                    </div>
                    <div className="div3">
                        <h2 className="hide">Filters</h2>
                        <p className="hide">Search Location</p>
                        <input type="search" name="Location" list="cities" placeholder="Select Location" className="list1"/>
                        <datalist id="cities">
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Chennai">Chennai</option>
                        </datalist>
                        <p className="hide">Cuisine</p>
                    
                        <input type="checkbox" name="food" id="food" className="hide"/>
                        <label className="hide">North Indian</label>
                        <br/>
                        <input type="checkbox" name="food" id="food" className="hide"/>
                        <label className="hide">South Indian</label>
                        <br/>
                        <input type="checkbox" name="food" id="food" className="hide"/>
                        <label className="hide">Chinese</label>
                        <br/>
                        <input type="checkbox" name="food" id="food" className="hide"/>
                        <label className="hide">Fast Food</label>
                        <br/>
                        <input type="checkbox" name="food" id="food" className="hide"/>
                        <label className="hide">Street Food</label>
                        <br/>
                        <p className="hide">Cost for two</p>
                        <input type="radio" name="cost" id="cost" className="hide"/>
                        <label for="" className="hide">less than $500</label>
                        <br/>
                        <input type="radio" name="cost" id="cost" className="hide"/>
                        <label for="" className="hide">$500 to $1000</label>
                        <br/>
                        <input type="radio" name="cost" id="cost" className="hide"/>
                        <label for="" className="hide">$1000 to $1500</label>
                        <br/>
                        <input type="radio" name="cost" id="cost" className="hide"/>
                        <label for="" className="hide">$1500 to $2000</label>
                        <br/>
                        <input type="radio" name="cost" id="cost" className="hide"/>
                        <label for="" className="hide">$2000+</label>
                        <p className="hide">Sort</p>
                        <input type="radio" name="cost" id="cost" className="hide"/>
                        <label for="" className="hide">price low to high</label>
                        
                        <br/>
                        <input type="radio" name="cost" id="cost" className="hide"/>
                        <label for="" className="hide">price high to low</label>

                    </div>
                    <div className="container">
                        <div className="box">
                            <img className="image" src="f1.jpg" alt=""/>
                            <h1 className="heading"> Breakfast  </h1>
                            <h5 className="heading2">Fort</h5>
                            <p className="description"> Start your day with exclusive Breakfast option </p>
                            <hr/>
                            <p className="para1">Cuisine:</p>
                            <p className="para2">Bakery</p>
                            <p className="para1">cost for two:</p>
                            <p className="para2">$500</p>
                        </div>
                        <br/>
                        <div className="box">
                            <img className="image" src="f2.jpg" alt=""/>
                            <h1 className="heading"> Lunch</h1>
                            <h5 className="heading2">Fort</h5>
                            <p className="description">Start your day with exclusive Breakfast option </p>
                            <hr/>
                            <p className="para1">Cuisine:</p>
                            <p className="para2">Bakery</p>
                            <p className="para1">cost for two:</p>
                            <p className="para2">$500</p>
                        </div>
                        <br/>
                        <button className="button1">{'<'}</button>
                        <button className="button2">1</button>
                        <button className="button">2</button>
                        <button className="button">3</button>
                        <button className="button">4</button>
                        <button className="button">5</button>
                        <button className="button">{'>'}</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Filter;