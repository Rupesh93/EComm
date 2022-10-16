import React from "react";
import './navbar.css'
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="brand-logo">

        </div>
        <ul className="navul">
            <li className="nav-links"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-links"><a href="/about" className="nav-link">About </a></li>
            <li className="nav-links"><a href="/contact" className="nav-link">Contact us</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
