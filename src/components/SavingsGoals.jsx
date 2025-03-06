// src/components/SavingsGoals.jsx
import React, { useState } from "react";

const SavingsGoals = ({ updateBalance }) => {
  const [goals, setGoals] = useState([
    { id: 1, name: "New Laptop", saved: 350, target: 1000, icon: "fa-laptop" },
    {
      id: 2,
      name: "Summer Clothes",
      saved: 150,
      target: 200,
      icon: "fa-tshirt",
    },
  ]);

  const addToGoal = (id, amount) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id ? { ...goal, saved: goal.saved + amount } : goal
      )
    );
    updateBalance(-amount);
  };

  return (
    <section className="saving-goals">
      <div className="section-header">
        <h2>Saving Goals</h2>
      </div>
      <div className="goals-list">
        {goals.map((goal) => (
          <div className="goal-card" key={goal.id}>
            <div className="goal-icon">
              <i className={`fas ${goal.icon}`}></i>
            </div>
            <div className="goal-info">
              <h3>{goal.name}</h3>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${(goal.saved / goal.target) * 100}%` }}
                ></div>
              </div>
              <p>
                ${goal.saved}{" "}
                <span className="of-target">of ${goal.target}</span>
              </p>
              <button
                className="add-goal-btn"
                onClick={() => addToGoal(goal.id, 50)}
              >
                Add $50
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SavingsGoals;
