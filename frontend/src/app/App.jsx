import { Route, Routes } from "react-router-dom";

import MainLayout from "./MainLayout";

import Login from "../pages/Loign/login";
import KitchenPos from "../pages/KitchenPos/KitchenPos";
import Orders from "../pages/Orders/Orders";
import Inventory from "../pages/Inventory/Inventory";
import Settings from "../pages/Settings/Settings";
import Dashboard from "../pages/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<MainLayout />}>
        <Route path="/" element={<KitchenPos />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;