import React, { useState } from "react";
import { urlWaiter } from "../api/Api";

export default function TinoQueryForm() {
  
  const [id, setId] = useState('');
  const [status, setStatus] = useState(false);
  let res, data;

  const handleChange = (e) => {
    const { value } = e.target;
    setId(value);
  }

  const handleSubmit = async (e) => {
    const divResultado = document.getElementById('resultado');
    try {
      e.preventDefault()
      res = await fetch(`${urlWaiter}/${id}`, { method: "GET" })
      data = await res.json();
      console.log(data)
      setStatus(true);
      divResultado.textContent = `${data.codMesero}: ${data.nombreMesero}`
      e.target.reset();
    } catch (error) {
      setStatus(false);
      divResultado.textContent = `Mesero no encontrado. Probar nuevamente`
      //console.log(error);
    }
    
  }

  return (
    <div className="row align-items-center">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="idMesero" className="form-label">
            ID
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={id}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-dark">
            Consultar mesero
          </button>
        </div>
      </form>
        <div className="mb-3">
          {status ? "Mesero encontrado" : "Buscar mesero"}
        </div>
        <div id="resultado" className="mb-3">
        </div>
    </div>
  );
}
