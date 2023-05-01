import React from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesEmpty.css";

export const BadgesEmpty = () => {
  return (
    <div className="badgesEmpty-container">
      <h1>No tienes Badges creados</h1>
      <p>Crea un badge pulsando el siguiente boton</p>
      <Link to={"/"}>
        <button className="btn btn-primary">Crear badge</button>
      </Link>
    </div>
  );
};
