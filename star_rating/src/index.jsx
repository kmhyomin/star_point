import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

export const ColorContext = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ColorContext.Provider value={{ colors }}>
    <App />
  </ColorContext.Provider>,
);

reportWebVitals();
