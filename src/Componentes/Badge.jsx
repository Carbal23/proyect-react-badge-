import React from "react";
import "./styles/badge.css";

export const Badge = ({firstName,lastName,job,redSocial}) => {
  return (
    <div className="badge-container">
      <div className="badge-header">
        <img
          src="../public/imagenes/header.webp"
          alt="logo de la conferencia"
        />
      </div>
      <div className="badge-name">
        <img className="avatar" src={`https://robohash.org/${redSocial}`} alt="avatar" />
        <h1>{firstName} <br /> {lastName}</h1>
      </div>
      <div className="badge-info">
        <h3>{job}</h3>
        <p>{redSocial}</p>
      </div>
      <div className="badge-footer">
        <p>#Proyect-react</p>
      </div>
    </div>
  );
};
