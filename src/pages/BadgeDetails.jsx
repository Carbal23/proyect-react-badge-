import React from "react";
import "./styles/badgeDetails.css";
import { useBadges } from "../useBadges";
import { BadgesLoading } from "../Componentes/BadgesLoading";
import { Badge } from "../Componentes/Badge";
import { Link } from "react-router-dom";
import { Modal } from "../Modal/Modal";
import { BadgeDeleteModal } from "../Componentes/BadgeDeleteModal";

export const BadgeDetails = () => {
  const { loading, error, badgeEdit, onOpenModal, openModal, onCloseModal, onDeleteBadgeHandle} = useBadges();
  return (
    <div className="big-container">
      <div className="headerDetails header">
        <img className="img-head" src="../public/imagenes/logo.png" alt="" />
        {loading && (
          <BadgesLoading
            msg={"Cargando detalles del Badge, por favor tenga paciencia"}
          />
        )}
        {error && <BadgesError />}
        {!loading && <h1>{`${badgeEdit.firstName} ${badgeEdit.lastName}`}</h1>}
      </div>
      <div className="mainBadgeDetails">
        {loading && (
          <BadgesLoading
            msg={"Cargando detalles del Badge, por favor tenga paciencia"}
          />
        )}
        {error && <BadgesError />}
        <div className="badgeDetails-container">
          <div className="badge-details">
            {!loading && (
              <Badge
                firstName={badgeEdit.firstName}
                lastName={badgeEdit.lastName}
                job={badgeEdit.job}
                redSocial={badgeEdit.redSocial}
                avatar={badgeEdit.avatar}
              />
            )}
          </div>
          <div className="actionBadge-container">
            {!loading && (
              <>
                <div className="actionBadge">
                  <h2>Action Badge</h2>
                  <div className="buttonEdit-container">
                    <Link
                      to={`/${badgeEdit.id}/edit`}
                      className="btn btn-primary"
                    >
                      Editar
                    </Link>
                  </div>
                  <div className="buttonDelete-container">
                    <button onClick={onOpenModal} className="btn btn-danger">Delete</button>
                    {!!openModal && (
                        <Modal onClose={onCloseModal}>
                            <BadgeDeleteModal onClose={onCloseModal} onDeleteBadge={onDeleteBadgeHandle}/>
                        </Modal>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
