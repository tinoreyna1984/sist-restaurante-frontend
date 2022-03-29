import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // React Router
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ItemsRest from "./ItemsRest";
import Uso from "./Uso";

export default function IndexSite() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<ItemsRest />} />
          <Route path="/uso" element={<Uso />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
