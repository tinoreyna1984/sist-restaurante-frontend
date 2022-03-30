import { useEffect, useState } from "react";
import { urlItemsRest, urlWaiter } from "../api/Api";

export function useGet() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(urlItemsRest, { method: "GET" })
      .then((response) => response.json())
      .then((datos) => {
        setItems(datos);
      })
      .catch((error) => console.log(error));
  }, []);

  return items;
}

export function doPost(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", 'Accept': 'application/json' },
    body: JSON.stringify(data),
  };
  const res = fetch(urlWaiter, requestOptions)
    .then((response) => response.statusText)
    .catch((error) => console.log(error));
  return res;
}
