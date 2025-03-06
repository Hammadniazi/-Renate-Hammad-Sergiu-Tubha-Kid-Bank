// src/components/Transactions.jsx
import React, { useState } from "react";

const Transactions = ({ transactions, addTransaction }) => {
  const [newTransaction, setNewTransaction] = useState({
    name: "",
    category: "",
    amount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newTransaction.name ||
      !newTransaction.category ||
      !newTransaction.amount
    )
      return;
    addTransaction(
      newTransaction.name,
      newTransaction.category,
      parseFloat(newTransaction.amount)
    );
    setNewTransaction({ name: "", category: "", amount: "" });
  };

  return (
    <section className="recent-transactions">
      <div className="section-header">
        <h2>Recent Transactions</h2>
      </div>
      <div className="transaction-list">
        {transactions.map((transaction) => (
          <div className="transaction-card" key={transaction.id}>
            <div className="transaction-icon">
              <i className="fas fa-shopping-bag"></i>
            </div>
            <div className="transaction-info">
              <h3>{transaction.name}</h3>
              <p>{transaction.category}</p>
            </div>
            <div className="transaction-amount">
              <p
                className={`amount-spent ${
                  transaction.amount > 0 ? "positive" : "negative"
                }`}
              >
                {transaction.amount > 0 ? "+" : "-"}$
                {Math.abs(transaction.amount).toFixed(2)}
              </p>
              <p className="transaction-date">Just now</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="transaction-form">
        <input
          type="text"
          name="name"
          placeholder="Transaction Name"
          value={newTransaction.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newTransaction.category}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={newTransaction.amount}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Add Transaction</button>
      </form>
    </section>
  );
};

export default Transactions;
