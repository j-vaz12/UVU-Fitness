import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo"><Link to="/">UVU FITNESS</Link></div>
      <ul className="navbar__links">
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/location">Location</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
      <Link to="/schedule" className="navbar__cta">Schedule Now</Link>
    </nav>
  );
};

export default Navbar;