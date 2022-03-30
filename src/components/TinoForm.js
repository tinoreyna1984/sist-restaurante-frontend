import React, { useState } from "react";
import { codMeseroLabel, nomMeseroLabel, btnMeseroLabel } from "./Labels";
import { doPost } from "../api/Methods";

export default function TinoForm() {
  const [datos, setDatos] = useState({
    codMesero: "",
    nombreMesero: "",
  });
  const [status, setStatus] = useState(false);

  //let mensaje = '';

  // IMPORTANTE: controla los eventos del cambio de valor
  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  // IMPORTANTE: genera el evento despues de ingresar los valores para enviar
  const handleSubmit = (event) => {
    event.preventDefault();
    doPost(datos);
    setStatus(true);
    event.target.reset();
    setDatos({
      codMesero: "",
      nombreMesero: "",
    });
  };

  return (
    <div className="row align-items-center">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="codMesero" className="form-label">
            {codMeseroLabel}
          </label>
          <input
            type="text"
            id="codMesero"
            name="codMesero"
            className="form-control"
            onChange={handleInputChange}
          />
          <label htmlFor="nombreMesero" className="form-label">
            {nomMeseroLabel}
          </label>
          <input
            type="text"
            id="nombreMesero"
            name="nombreMesero"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-dark">
            {btnMeseroLabel}
          </button>
        </div>
        <div className="mb-3">
          {status?<label className="form-label">Insertado</label>:
          <label className="form-label">Pruebe insertar</label>}
        </div>
      </form>
    </div>
  );
}
