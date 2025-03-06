// src/components/SpendingCategories.jsx
import React from "react";

const SpendingCategories = () => {
  const categories = [
    { name: "Food", icon: "fa-utensils", spent: 98.5, budget: 150 },
    { name: "Entertainment", icon: "fa-gamepad", spent: 40, budget: 50 },
    { name: "Shopping", icon: "fa-shopping-bag", spent: 67.25, budget: 150 },
  ];

  return (
    <section className="spending-categories">
      <div className="section-header">
        <h2>This Month's Spending</h2>
        <a href="#" className="view-all">
          View All
        </a>
      </div>
      <div className="category-list">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <div className={`category-icon ${category.name.toLowerCase()}`}>
              <i className={`fas ${category.icon}`}></i>
            </div>
            <div className="category-info">
              <h3>{category.name}</h3>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width: `${(category.spent / category.budget) * 100}%`,
                  }}
                ></div>
              </div>
              <p>
                ${category.spent.toFixed(2)}{" "}
                <span className="budget">of ${category.budget}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpendingCategories;
