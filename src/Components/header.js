import React from "react";
// import {Link} from "react-router-dom";
import "./Styles/filter.css";

class Header extends React.Component{
    render(){
        return(
            <header className="header">
                <div className="logo-circle">e!</div>
                <div className="auth-buttons">
                <button className="login-btn">Login</button>
                <button className="create-account-btn">Create an account</button>
                </div>
            </header>
        )
    }
}
export default Header;