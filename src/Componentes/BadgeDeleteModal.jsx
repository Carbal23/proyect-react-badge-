import React from "react";
import "./styles/badgeDeleteModal.css";

export const BadgeDeleteModal = ({onClose, onDeleteBadge}) => {
  return (
    <div className="badgeDelete-container">
      <div className="msg-confirm">
        <h1>Are you Sure?</h1>
        <p>You ara about to delete this badge</p>
      </div>
      <div className="container-buttondelete">
        <button className="delete-button btn btn-danger mr-4" onClick={onDeleteBadge}>Delete</button>
        <button className="cancel-button btn btn-primary" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};
