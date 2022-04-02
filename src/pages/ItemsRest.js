import React from "react";
import { useGetAllItems } from "../api/Methods";
import TinoQueryForm from "../components/TinoQueryForm";
import TinoSubmitForm from "../components/TinoSubmitForm";

const ItemsRest = () => {
  const data = useGetAllItems();
  //console.log(data);
  return (
    <div className="container">
      <div className="row align-items-center">
        <h1>RESTaurant API</h1>
        <h2>Platos típicos peruanos</h2>
        <ul className="fs-5 col-md-10" style={{ listStyle: "none" }}>
          {data.map((item) => (
            <li key={item.id}>
              {item.descripcion}, a USD{item.precio}
            </li>
          ))}
        </ul>
      </div>
      <div className="row align-items-center">
        <h2>Registro un nuevo mesero</h2>
        <TinoSubmitForm />
      </div>
      <div className="row align-items-center">
        <h2>Consultar mesero por ID (valores {">"}= 1)</h2>
        <TinoQueryForm />
      </div>
      <div className="row align-items-center">
        <h2>Más información de uso en la siguiente pestaña.</h2>
      </div>
    </div>
  );
};
export default ItemsRest;
