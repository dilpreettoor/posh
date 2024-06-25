import { Link } from "react-router-dom";
import "./header.css";
import webLogo from "../../assets/Images/poshLogo.png";
import { useState, useEffect } from "react";


function Header() {

  return (
    <>
      <header className="headerNav">
        <div className="headerNav__container">

          <div className="headerNav__logo">
            <Link to="/">
              <img
                className="headerNav__logo--image"
                src={webLogo}
                alt="website logo"
              />
            </Link>
          </div>
          <div className="headerNav__desktop-menu">
            <Link to="/aboutus">
              <h2>About</h2>
            </Link>
            <Link to="/projects">
            <h2>Project</h2>
            </Link>
            <Link to="/profile">
              <h2>Profile</h2>
            </Link>
            <Link to="/contact">
              <h2>Contact</h2>
            </Link>
          </div>
          
        </div>
      </header>
    </>
  );
}

export default Header;
