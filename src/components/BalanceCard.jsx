// src/components/BalanceCard.jsx
import React from "react";

const BalanceCard = ({ balance }) => {
  return (
    <section className="balance-card">
      <div className="card-header">
        <h2>Your Balance</h2>
        <span className="card-icon">
          <i className="fas fa-eye"></i>
        </span>
      </div>
      <div className="balance-amount">
        <span className="currency">$</span>
        <span className="amount">{balance.toFixed(2)}</span>
      </div>
      <div className="balance-actions">
        <button className="action-btn add-money">
          <i className="fas fa-plus"></i>
          <span>Add</span>
        </button>
        <button className="action-btn pay">
          <i className="fas fa-paper-plane"></i>
          <span>Pay</span>
        </button>
        <button className="action-btn request">
          <i className="fas fa-hand-holding-usd"></i>
          <span>Request</span>
        </button>
      </div>
    </section>
  );
};

export default BalanceCard;
