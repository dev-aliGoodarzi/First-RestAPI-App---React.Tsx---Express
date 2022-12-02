// React
import React from "react";
import ReactDOM from "react-dom/client";
// React
// App Component
import App from "./App";
// App Component
// Main & Root Css File
import "./index.css";
// Main & Root Css File
// Modules
import { BrowserRouter as Router } from "react-router-dom";
// Modules

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
