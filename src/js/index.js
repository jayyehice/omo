import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../css/index.css";
// Import css files
import "../css/_slick.scss";
import "../css/_slickTheme.scss";

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
    <React.StrictMode>
            <App />
    </React.StrictMode>
);