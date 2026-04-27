import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UIProvider } from "./context/UiContext.jsx";
import "./index.css";
import App from "./app/App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UIProvider>
        <App />
      </UIProvider>
    </BrowserRouter>
  </StrictMode>,
);
