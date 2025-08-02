
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">UVU FITNESS</div>
      <ul className="navbar__links">
        <li><a href="#">About Me</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Location</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
      <a href="#" className="navbar__cta">Schedule Now</a>
    </nav>
  );
};

export default Navbar;