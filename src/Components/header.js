import React from "react";
import "./Styles/filter.css";
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const backgroundColor = location.pathname === '/' ? 'transparent' : '#ff0000';
    const position = location.pathname === '/' ? 'absolute':'relative';
    const display = location.pathname === '/'? 'none':'' ;
    return (
        <header className="header" style={{ backgroundColor,position}}>
            <div className="logo-circle" style={{display}}>e!</div>
            <div className="auth-buttons">
                <button className="login- btn">Login</button>
                <button className="create-account- btn">Create an account</button>
            </div>
        </header>
    );
};

export default Header;