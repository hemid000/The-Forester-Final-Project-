import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Layout from "./components/Layout/Layout";

import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./components/Pages/Home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout>
      <App>
        <Home />
      </App>

    </Layout>
  </React.StrictMode>
);
