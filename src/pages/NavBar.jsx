import React from "react";
import "../pages/styles/navBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container-logo">
        <Link to="/">
          <img className="img-logo" src="../public/imagenes/logo.png" alt="" />
          <span className="title">Consferen </span>
          <span className="title1">Ingennier</span>
        </Link>
      </div>
    </div>
  );
};
