// src/components/RestrictedPurchaseModal.jsx
import React from "react";

const RestrictedPurchaseModal = ({ show, onClose, item, reason }) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>
          &times;
        </span>
        <div className="modal-icon restricted">
          <i className="fas fa-exclamation-triangle"></i>
        </div>
        <h2>Purchase Restricted</h2>
        <p>
          This purchase has been restricted because it falls into a category
          that's not allowed for your account.
        </p>
        <p className="item-details">
          Item: <span>{item}</span>
        </p>
        <p className="restriction-reason">
          Reason: <span>{reason}</span>
        </p>
        <button className="modal-btn close-btn" onClick={onClose}>
          OK, I Understand
        </button>
      </div>
    </div>
  );
};

export default RestrictedPurchaseModal;
