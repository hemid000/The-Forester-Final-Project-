import React from "react";
import './index.css'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./components/Layout/Layout";
import ScrolTotop from "./components/ScrolToTop/ScrolToTop"
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  window.location.pathname === "/" ||
    window.location.pathname === "/pricing" ||
    window.location.pathname === "/account" ||
    window.location.pathname === "/branding" ||
    window.location.pathname === "/contact" ||
    window.location.pathname === "/my_acc" ||
    window.location.pathname === "/shop" ||
    window.location.pathname === "/single_post" ||
    window.location.pathname === "/fadeout" ||
    window.location.pathname === "/classic" ? (
    <BrowserRouter>
      <ScrolTotop />
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <ScrolTotop />
      <App />
    </BrowserRouter>
  )
);
