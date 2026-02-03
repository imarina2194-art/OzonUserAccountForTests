import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./tokens.css";   // 👈 THIS replaces your <link> tag

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
