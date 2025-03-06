// src/components/PaymentSimulator.jsx
import React from "react";

const PaymentSimulator = ({ addTransaction }) => {
  const testPurchases = [
    {
      name: "Movie Ticket",
      amount: 12.5,
      category: "Entertainment",
      restricted: false,
    },
    {
      name: "Headphones",
      amount: 49.99,
      category: "Electronics",
      restricted: false,
    },
    {
      name: "Energy Drink",
      amount: 3.99,
      category: "Age Restricted",
      restricted: true,
    },
    {
      name: "18+ Subscription",
      amount: 14.99,
      category: "18+ Content",
      restricted: true,
    },
  ];

  const handlePurchase = (purchase) => {
    if (purchase.restricted) {
      alert(`Purchase of ${purchase.name} is restricted!`);
    } else {
      addTransaction(purchase.name, purchase.category, -purchase.amount);
    }
  };

  return (
    <section className="payment-simulator">
      <div className="section-header">
        <h2>Test Payment Restrictions</h2>
      </div>
      <div className="simulator-container">
        <p className="simulator-description">
          Try our payment restriction system with these example purchases:
        </p>
        <div className="test-purchases">
          {testPurchases.map((purchase, index) => (
            <button
              key={index}
              className={`test-btn ${
                purchase.restricted ? "restricted" : "allowed"
              }`}
              onClick={() => handlePurchase(purchase)}
            >
              <i
                className={`fas ${
                  purchase.restricted ? "fa-ban" : "fa-shopping-cart"
                }`}
              ></i>
              <span>{purchase.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentSimulator;
