/**
 * Componente de navegacion
 */
import React from "react";
import {Link, NavLink} from 'react-router-dom'
import logo from "../assets/RESTauranteAPI.png";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-danger">
      <div className="container-fluid">
        <Link
          className="nav-link"
          aria-current="page"
          to="/"
          style={{ color: "whitesmoke", paddingRight: "15px" }}
        >
          <img src={logo} alt="RESTaurante API" style={{ height: "4rem", width: "4rem" }}></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0 px-3">
            <li className="nav-item me-3">
              <NavLink
                className="nav-link fs-4"
                style={{ color: "whitesmoke" }}
                aria-current="page"
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink
                className="nav-link fs-4"
                style={{ color: "whitesmoke" }}
                aria-current="page"
                to="/uso"
              >
                Uso
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
