import React from "react";
import { useGet } from "../api/Methods";
import TinoForm from "../components/TinoForm";

const ItemsRest = () => {
  const data = useGet();
  console.log(data);
  return (
    <div className="container">
      <div className="row align-items-center">
        <h1>RESTaurant API</h1>
        <h2>Platos típicos peruanos</h2>
        <ul className="fs-5 col-md-10" style={{ listStyle: "none" }}>
          {data.map((item) => (
            <li key={item.id}>{item.descripcion}</li>
          ))}
        </ul>
      </div>
      <div className="row align-items-center">
        <h2>Registro un nuevo mesero</h2>
        < TinoForm />
      </div>
      <div className="row align-items-center">
        <h2>Más información de uso en la siguiente pestaña.</h2>
      </div>
    </div>
  );
};
export default ItemsRest;
