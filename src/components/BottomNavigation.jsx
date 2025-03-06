// src/components/BottomNavigation.jsx
import React from "react";

const BottomNavigation = () => {
  return (
    <div className="bottom-nav">
      <a href="#" className="bottom-nav-item active">
        <i className="fas fa-home"></i>
        <span>Home</span>
      </a>
      <a href="#" className="bottom-nav-item">
        <i className="fas fa-wallet"></i>
        <span>Wallet</span>
      </a>
      <a href="#" className="bottom-nav-item pay-btn">
        <div className="pay-btn-circle">
          <i className="fas fa-paper-plane"></i>
        </div>
      </a>
      <a href="#" className="bottom-nav-item">
        <i className="fas fa-chart-pie"></i>
        <span>Budget</span>
      </a>
      <a href="#" className="bottom-nav-item">
        <i className="fas fa-book"></i>
        <span>Learn</span>
      </a>
    </div>
  );
};

export default BottomNavigation;
