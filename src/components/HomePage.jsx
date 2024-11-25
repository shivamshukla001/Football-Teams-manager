import React from "react";
import { Link } from "react-router-dom";
import "../homePage.css"; // Importing styles for the homepage
import "../styles.css";

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Navbar Section */}
      <header className="header-section">
        <h1 className="app-title">Football Team Manager</h1>
        <nav className="nav-links">
          <Link to="/player-profile">Player Profile</Link>
          <Link to="/analytics">Analytics</Link>

          <Link to="/blogs">Blogs</Link>
          <Link to="/stats-comparison" className="link-card-btn">
            Compare Player Stats
          </Link>
          <Link to="/highlights" className="link-card-btn">
            Match Highlights
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to Football Team Manager</h1>
        <p>Streamline your football team management with ease!</p>
        <Link to="/analytics" className="hero-btn">
          Explore Now
        </Link>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Effortless Management</h3>
            <p>
              Organize players, track stats, and streamline your team
              effortlessly.
            </p>
          </div>
          <div className="feature-card">
            <h3>Comprehensive Analytics</h3>
            <p>Gain deep insights into player performance and team dynamics.</p>
          </div>
          <div className="feature-card">
            <h3>Seamless Integration</h3>
            <p>
              Connect and manage data in one cohesive platform for ultimate
              efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <p>&copy; 2024 Football Team Manager. All Rights Reserved.</p>
        <p>Made with passion for football enthusiasts worldwide.</p>
      </footer>
    </div>
  );
};

export default HomePage;
