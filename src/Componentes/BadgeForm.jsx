import React, { useEffect, useState } from "react";
import "./styles/badgeForm.css";

export const BadgeForm = ({ datos, setDatos, addBadge, onChange, titleForm, handleSubmit }) => {

  return (
    <div className="badgeForm-container">
      <div className="titleform">
        <h1>{titleForm}</h1>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            placeholder="Write the First Name"
            onChange={onChange}
            value={datos.firstName}
            name="firstName"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            placeholder="Write the Last Name"
            onChange={onChange}
            value={datos.lastName}
            name="lastName"
          />
        </div>
        <div className="form-group">
          <label>Job</label>
          <input
            type="text"
            placeholder="Write the job"
            onChange={onChange}
            value={datos.job}
            name="job"
          />
        </div>
        <div className="form-group">
          <label>Red Social</label>
          <input
            type="text"
            placeholder="Write the red social"
            onChange={onChange}
            value={datos.redSocial}
            name="redSocial"
          />
        </div>
        <div className="button-container">
          <button type="submit" className="button-save">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
