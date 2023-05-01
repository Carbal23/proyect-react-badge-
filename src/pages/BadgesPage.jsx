import React from "react";
import { BadgesList } from "../Componentes/BadgeList";
import { Link } from "react-router-dom";
import { BadgesLoading } from "../Componentes/BadgesLoading";
import { BadgesError } from "../Componentes/BadgesError";
import { BadgesEmpty } from "../Componentes/BadgesEmpty";
import { useBadges } from "../useBadges";
import "./styles/badgesPage.css";

export const BadgesPages = () => {
  const { loading, error, allBadges, badges, query, filterBadge, searchBadges } = useBadges();

  // const data = [
  //   {
  //     id: "12345",
  //     firstName: "Alejandro",
  //     lastName: "Fernandez",
  //     job: "Mecanico",
  //     redSocial: `alejandro.com`,
  //     avatar: `https://robohash.org/alejandro`,
  //   },
  //   {
  //     id: "12342341",
  //     firstName: "Maria",
  //     lastName: "Rodriguez",
  //     job: "Enfermera",
  //     redSocial: `Maria.com`,
  //     avatar: `https://robohash.org/Maria`,
  //   },
  //   {
  //     id: "1234524342",
  //     firstName: "Kevin",
  //     lastName: "Sanchez",
  //     job: "Abogado",
  //     redSocial: `Kevin.com`,
  //     avatar: `https://robohash.org/Kevin`,
  //   },
  // ];

  return (
    <>
      <div className="header">
        <h1>CONFERENCIA PARA FRONTEND DEVELOPER</h1>
        <img className="img-head" src="../public/imagenes/logo.png" alt="" />
      </div>
      <div className="main-list">
        <div className="form-group filter">
          <label>Filter Badges</label>
          <input type="text" className="form-control" onChange={filterBadge} value={query}/>
        </div>
        <div className="button-add">
          <Link to="/">
            <button className="add-button">Add new Badge</button>
          </Link>
        </div>
        <div className="badges-list">
          <div className="container-list">
            {loading && (
              <BadgesLoading
                msg={"Cargando todos los Badges, Por favor ten paciencia..."}
              />
            )}
            {error && <BadgesError />}
            {!loading && !allBadges && <BadgesEmpty />}
            <BadgesList badges={searchBadges} />
          </div>
        </div>
      </div>
    </>
  );
};
