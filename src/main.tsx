import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";

// Optional: if your App expects global styles, uncomment these one-by-one if needed
// import "./styles/index.css";
// import "./styles/tailwind.css";
// import "./styles/theme.css";
// import "./styles/fonts.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
