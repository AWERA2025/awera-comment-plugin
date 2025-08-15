import React, { useState } from "react";
import "./navbar.css";


function Navbar() {
  return (
      
    <nav className="navbar">
      {/* Logo */}
      <h1>Kullen</h1>

      {/* Desktop Nav Buttons */}
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>

      {/* Hamburger Icon */}
      <div className="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <button>Home</button>
        <button>About</button>
        <button>Services</button>
        <button>Contact</button>
      </div>
    </nav>
    )
};

export default Navbar;
