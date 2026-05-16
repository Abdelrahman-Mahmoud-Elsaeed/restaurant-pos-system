import Navbar from "../component/layouts/Navbar/Navbar";
import OverlaySidebar from "../component/layouts/OverlaySidebar/OverlaySidebar.jsx";
import Sidebar from "../component/layouts/Sidebar/Sidebar";
import Button from "../component/ui/Button/Button";
import Taps from "../component/ui/Taps/Taps";
import KitchenPos from "../pages/KitchenPos/KitchenPos.jsx";
import Login from "../pages/login/login.jsx";
import NavOrder from "../pages/Navbar-orders/Nav.jsx";
import StatusOrder from "../component/ui/OrderCard/State.jsx";
function App() {
  return (
    <>
      {/* <div className="d-flex min-100vh" >
        <div>
          <Sidebar></Sidebar>
        </div>
        <div className="w-100" >
          <Navbar></Navbar>
          <KitchenPos/>
          <OverlaySidebar></OverlaySidebar>
        </div>
      
      </div> */}

      <NavOrder />
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <StatusOrder color="#ee0b0b" counter="3" status="New Orders" />
        <StatusOrder color="#007bff" counter="5" status="Preparing" />
      </div>
    </>
  );
}

export default App;
