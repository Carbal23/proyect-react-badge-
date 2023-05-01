import React from "react";
import { Badge } from "../Componentes/Badge";
import "../pages/styles/badgeEditPage.css";
import { BadgeForm } from "../Componentes/BadgeForm";
import { Link } from "react-router-dom";
import { useBadges } from "../useBadges";


export const BadgeEdit = () => {
  const{
    datos,
    setDatos,
    addBadge,
    badgeEdit,
    handleChange,
    editBadge,

  } = useBadges();

  return (
    <div className="container-page-edit">
      <div className="header-edit">
        <h1>CONFERENCIA PARA FRONTEND DEVELOPER</h1>
        <img className="img-head-edit" src="../public/imagenes/logo.png" alt="" />
      </div>
      <div className="container-badge-edit">
        <Badge
          firstName={datos.firstName || "Nombre"}
          lastName={datos.lastName || "Apellidos"}
          job={datos.job || "ocupacion"}
          redSocial={datos.redSocial || "@nombre"}
          avatar={datos.avatar || "https://robohash.org/"}
        />
        <BadgeForm
        datos={badgeEdit}
        setDatos={setDatos}
        addBadge={addBadge}
        onChange={handleChange}
        titleForm={"Edit Attendant"}
        handleSubmit={editBadge}

        />
      </div>
      <Link to="/badgesPages" className="linkBadgeEdit">
          <button className="btn btn-primary badgeList-button">Badges List</button>
        </Link>
    </div>
  );
};
