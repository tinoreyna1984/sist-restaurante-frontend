import React, { useState } from "react";
import { doGetWaiter } from "../api/Methods";

export default function TinoQueryForm() {
  const [status, setStatus] = useState(false);
  const [dato, setDato] = useState({
    id: "",
    codMesero: "",
    nombreMesero: "",
  });
  
  const handleInputChange = (event) => {
    setDato({
      ...dato,
      [event.target.name]: event.target.value,
    });
  };

  const consultaMesero = (event) => {
    event.preventDefault();
    const res = doGetWaiter(dato.id);
    setStatus(true);
    setDato(res);
    console.log(dato)
    event.target.reset();
  };

  return (
    <div className="row align-items-center">
      <form onSubmit={consultaMesero}>
        <div className="mb-3">
          <label htmlFor="idMesero" className="form-label">
            ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            className="form-control"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-dark">
            Consultar mesero
          </button>
        </div>
        <div className="mb-3">
          {status ? (
            "Mesero encontrado"
          ) : (
            "Buscar mesero"
          )}
        </div>
      </form>
    </div>
  );
}
