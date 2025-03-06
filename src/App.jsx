// src/App.jsx (Main App component)
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import BalanceCard from "./components/BalanceCard";
import Transactions from "./components/Transactions";
import SpendingCategories from "./components/SpendingCategories";
import SavingsGoals from "./components/SavingsGoals";
import PaymentSimulator from "./components/PaymentSimulator";
import RestrictedPurchaseModal from "./components/RestrictedPurchaseModal";
import BottomNavigation from "./components/BottomNavigation";
import "./styles/global.css";

function App() {
  const [balance, setBalance] = useState(754.32);
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      name: "Spotify Premium",
      category: "Entertainment",
      amount: -9.99,
    },
    { id: 2, name: "Starbucks", category: "Food", amount: -5.75 },
    { id: 3, name: "Allowance", category: "Income", amount: 50.0 },
  ]);
  const [restrictedModal, setRestrictedModal] = useState({
    show: false,
    item: "",
    reason: "",
  });

  const addTransaction = (name, category, amount, restricted = false) => {
    if (restricted) {
      setRestrictedModal({
        show: true,
        item: name,
        reason: "Age restriction applies.",
      });
      return;
    }
    setTransactions((prev) => [
      ...prev,
      { id: prev.length + 1, name, category, amount },
    ]);
    setBalance((prevBalance) => prevBalance + amount);
  };

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <BalanceCard balance={balance} />
        <SpendingCategories />
        <Transactions
          transactions={transactions}
          addTransaction={addTransaction}
        />
        <SavingsGoals updateBalance={setBalance} />
        <PaymentSimulator addTransaction={addTransaction} />
      </main>
      <RestrictedPurchaseModal
        show={restrictedModal.show}
        item={restrictedModal.item}
        reason={restrictedModal.reason}
        onClose={() =>
          setRestrictedModal({ show: false, item: "", reason: "" })
        }
      />
      <BottomNavigation />
    </div>
  );
}

export default App;
