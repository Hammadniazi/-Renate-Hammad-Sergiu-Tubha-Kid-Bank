// src/components/Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="https://via.placeholder.com/40" alt="Logo" className="logo" />
        <h1>KidBank</h1>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fas fa-bars"></i>
      </button>
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><a href="#" className="active"><i className="fas fa-home"></i> Home</a></li>
        <li><a href="#"><i className="fas fa-wallet"></i> Wallet</a></li>
        <li><a href="#"><i className="fas fa-chart-pie"></i> Budget</a></li>
        <li><a href="#"><i className="fas fa-book"></i> Learn</a></li>
        <li><a href="#"><i className="fas fa-cog"></i> Settings</a></li>
      </ul>
      <div className="navbar-profile">
        <span className="notification-badge">
          <i className="fas fa-bell"></i>
          <span className="badge">2</span>
        </span>
        <div className="profile-pic">
          <img src="https://via.placeholder.com/35" alt="Profile" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
