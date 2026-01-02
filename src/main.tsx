import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

// ✅ Make sure these are NOT commented out
import "./src/styles/tailwind.css";
import "./src/styles/theme.css";
import "./src/styles/fonts.css";
import "./src/styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
