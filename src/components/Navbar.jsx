import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../navbar.css";  // Make sure to import the CSS for styling

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <h1>Football Team Management</h1>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/">Home</Link>  {/* Link to Home Page */}
        </li>
        <li>
          <Link to="/players">Players</Link>
        </li>
        <li>
          <Link to="/team-overview">Team Overview</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
