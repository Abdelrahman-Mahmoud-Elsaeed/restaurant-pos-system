import { Outlet } from "react-router-dom";

import Navbar from "../component/layouts/Navbar/Navbar";
import OverlaySidebar from "../component/layouts/OverlaySidebar/OverlaySidebar";
import Sidebar from "../component/layouts/Sidebar/Sidebar";

function MainLayout() {
  return (
    <div className="d-flex min-vh-100">
      <div>
        <Sidebar />
      </div>

      <div className="w-100">
        <Navbar />

        <main className="p-3">
          <Outlet />
        </main>

        <OverlaySidebar />
      </div>
    </div>
  );
}

export default MainLayout;