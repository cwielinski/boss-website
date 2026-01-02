import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

// ✅ Make sure these are NOT commented out
import "./app/styles/tailwind.css";
import "./app/styles/theme.css";
import "./app/styles/fonts.css";
import "./app/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
