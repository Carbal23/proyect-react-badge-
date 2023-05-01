import React from "react";
import "./styles/badgesList.css";
import { Link } from "react-router-dom";

export const BadgesList = ({ badges, onLoading, loading }) => {
  return (
      <ul className="list-unstyled">
        {badges.map((badge) => {
          return (
            <div key={badge.id}>
              <Link
                to={`/${badge.id}/details`}
                className="text-reset text-decoration-none"
              >
                <li className="element-list">
                  {loading && onLoading()}
                  <img
                    src={`https://robohash.org/${badge.redSocial}`}
                    alt=""
                    className="avataruser"
                  />
                  <p className="name">
                    {badge.firstName} {badge.lastName}
                  </p>
                  <p className="job">{badge.job}</p>
                  <p className="redsocial">{badge.redSocial}</p>
                </li>
              </Link>
            </div>
          );
        })}
      </ul>
  );
};
