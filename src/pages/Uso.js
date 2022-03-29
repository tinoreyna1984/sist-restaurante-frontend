import React from "react";
import modelo from "../assets/model.jpg";

const Uso = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <h1>Uso de RESTaurant API</h1>
        <p className="fs-5 col-md-10">
          Consiste en un API REST que simula las operaciones CRUD de un sistema
          gestor de un restaurante.
        </p>
        <p className="fs-5 col-md-10">
          Tecnologías empleadas (las versiones están en package.json): Node.js,
          Sequelize, SQLite.
        </p>
        <p className="fs-5 col-md-10">
          <a
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            href="https://sist-restaurante-backend.herokuapp.com"
            target="_blank"
            rel="noreferrer"
          >
            Ir al enlace del API.
          </a>
        </p>
        <p className="fs-5 col-md-10">Operaciones:</p>
        <ul className="fs-5" style={{ listStyle: "none" }}>
          <li>
            Item de restaurante
            <ul style={{ listStyle: "initial" }}>
              <li>GET, POST: (ENLACE)/itemrestaurante</li>
              <li>GET, PUT, DELETE: (ENLACE)/itemrestaurante/id</li>
            </ul>
          </li>
          <li>
            Usuario
            <ul style={{ listStyle: "initial" }}>
              <li>GET, POST: (ENLACE)/usuario</li>
              <li>GET, PUT, DELETE: (ENLACE)/usuario/id</li>
            </ul>
          </li>
          <li>
            Mesero
            <ul style={{ listStyle: "initial" }}>
              <li>GET, POST: (ENLACE)/mesero</li>
              <li>GET, PUT, DELETE: (ENLACE)/mesero/id</li>
            </ul>
          </li>
          <li>
            Mesa
            <ul style={{ listStyle: "initial" }}>
              <li>GET, POST: (ENLACE)/mesa</li>
              <li>GET, PUT, DELETE: (ENLACE)/mesa/id</li>
            </ul>
          </li>
          <li>
            Menú
            <ul style={{ listStyle: "initial" }}>
              <li>GET, POST: (ENLACE)/menu</li>
              <li>GET, PUT, DELETE: (ENLACE)/menu/id</li>
            </ul>
          </li>
          <li>
            Factura: cabecera y detalle
            <ul style={{ listStyle: "initial" }}>
              <li>GET, POST: (ENLACE)/fact_cab</li>
              <li>GET, PUT, DELETE: (ENLACE)/fact_cab/id</li>
              <li>GET, POST: (ENLACE/fact_det</li>
              <li>GET, PUT, DELETE: (ENLACE)/fact_det/id</li>
            </ul>
          </li>
        </ul>
        <p className="fs-5 col-md-10">Modelo generado para SQLite:</p>
        <img
          src={modelo}
          alt="modelo"
          style={{ width: "100%", heigth: "auto" }}
        ></img>
        <p className="fs-5 col-md-10">
          Nota: las relaciones no se han generado con Sequelize.
        </p>
        <p className="fs-5 col-md-10">Gracias por leer. Uso libre.</p>
        <div className="row align-items-center">
          <h2>Acerca de RESTaurant API</h2>
          <p className="fs-5 col-md-10">Hecho por Tino Reyna.</p>
        </div>
        <ul className="nav col-md-6 justify">
          <li className="ms-2 mt-1">
            <a
              href="https://github.com/tinoreyna1984/sist-restaurante-backend"
              className="btn btn-dark"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo Backend
            </a>
          </li>
          <li className="ms-2 mt-1">
            <a
              href="https://github.com/tinoreyna1984/sist-restaurante-frontend"
              className="btn btn-dark"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo Frontend
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Uso;
