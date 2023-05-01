import ReactDOM from "react-dom";
import React, { Children } from "react";
import "./modal.css";

export const Modal = ({children, onClose}) => {
  return ReactDOM.createPortal(
    <div className="modal">
        <div className="Modal-container">
            <div className="buttonClose">
            <button onClick={onClose} className="Modal-close">X</button>
            </div>
            
            {children}
        </div>
    
    </div>
    ,document.getElementById("modal"));
};