/**
 * Componente de navegacion
 */
import React from "react";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <a
          className="nav-link"
          aria-current="page"
          href="/"
          style={{ color: "whitesmoke", paddingRight: "15px" }}
        >
          RESTaurant API
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/uso">
                Uso
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
