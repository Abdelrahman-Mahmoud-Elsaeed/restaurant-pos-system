import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UIProvider } from "./context/UiContext.jsx";
import { AuthProvider } from "./context/auth.context.jsx";
import { OrderProvider } from "./context/order.context.jsx";
import "./index.css";
import App from "./app/App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <OrderProvider>
        <AuthProvider>
          <UIProvider>
            <App />
          </UIProvider>
        </AuthProvider>
      </OrderProvider>
    </BrowserRouter>
  </StrictMode>,
);
