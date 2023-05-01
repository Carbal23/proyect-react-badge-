import React from "react";
import { Badge } from "../Componentes/Badge";
import "../pages/styles/mainPage.css";
import { BadgeForm } from "../Componentes/BadgeForm";
import { Link } from "react-router-dom";
import { useBadges } from "../useBadges";

export const MainPage = () => {
  const{
    loading,
    error,
    datos,
    setDatos,
    addBadge,
    handleChange,
    handleSubmit,
  } = useBadges();

  return (
    <div className="container-page">
      <div className="header">
        <h1>CONFERENCIA PARA FRONTEND DEVELOPER</h1>
        <img className="img-head" src="../public/imagenes/logo.png" alt="" />
      </div>
      <div className="container-badge">
        <Badge
          firstName={datos.firstName || "Nombre"}
          lastName={datos.lastName || "Apellidos"}
          job={datos.job || "ocupacion"}
          redSocial={datos.redSocial || "@nombre"}
          avatar={datos.avatar || "https://robohash.org/"}
        />
        <BadgeForm
        datos={datos}
        setDatos={setDatos}
        addBadge={addBadge}
        onChange={handleChange}
        titleForm={"New Attendant"}
        handleSubmit={handleSubmit}
        />
      </div>
      <Link to="/badgesPages" className="linkBadgeList">
          <button className="btn btn-primary badgeList-button">Badges List</button>
        </Link>
    </div>
  );
};
