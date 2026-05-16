import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UIProvider } from "./context/UiContext.jsx";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css";
import App from "./app/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { OrderProvider } from "./context/order.context.jsx";
import { AuthProvider } from "./context/auth.context.jsx";

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
