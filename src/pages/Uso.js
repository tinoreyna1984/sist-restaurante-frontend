import React from "react";

const Uso = () => {
  return (
    <div className="row" style={{ paddingTop: "15px" }}>
      <div className="col-lg-8 mx-auto p-3 py-md-5">
        <main>
          <h1>Uso de RESTaurant API</h1>
          <p className="fs-5 col-md-8">
            Consiste en un API REST que simula las operaciones CRUD de un
            sistema gestor de un restaurante.
          </p>
          <p className="fs-5 col-md-8">
            Tecnologías empleadas (las versiones están en package.json):
            Node.js, Sequelize, SQLite.
          </p>
          <p className="fs-5 col-md-8">
            <a
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
              href="https://sist-restaurante-backend.herokuapp.com"
              target="_blank"
              rel="noreferrer"
            >
              Ir al enlace del API.
            </a>
          </p>
          <p className="fs-5 col-md-8">Operaciones:</p>
          <ul style={{ listStyle: "none" }}>
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
          <p className="fs-5 col-md-8">Modelo generado para SQLite: image</p>
          <p className="fs-5 col-md-8">
            Nota: las relaciones no se han generado con Sequelize.
          </p>
          <p className="fs-5 col-md-8">Gracias por leer. Uso libre.</p>
          <hr className="col-3 col-md-2 mb-5" />
          <div className="row g-5" style={{ paddingTop: "15px" }}>
            <div className="row">
              <h2>Acerca de RESTaurant API</h2>
              <p className="fs-5 col-md-8">Hecho por Tino Reyna.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <a
                  href="https://github.com/tinoreyna1984/sist-restaurante-backend"
                  className="btn btn-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo Backend
                </a>
              </div>
              <div className="col">
                <a
                  href="#"
                  className="btn btn-dark"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Repo Frontend
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Uso;
