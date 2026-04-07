import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ColorProvider from "./components/ColorProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ColorProvider>
    <App />
  </ColorProvider>,
);
reportWebVitals();
