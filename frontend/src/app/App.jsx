import Navbar from "../component/layouts/Navbar/Navbar";
import OverlaySidebar from "../component/layouts/OverlaySidebar/OverlaySidebar.jsx";
import Sidebar from "../component/layouts/Sidebar/Sidebar";
import Button from "../component/ui/Button/Button";
import Taps from "../component/ui/Taps/Taps";
import KitchenPos from "../pages/KitchenPos/KitchenPos.jsx";

import Login from "../pages/login";

function App() {
  return (
    <>
      <div className="d-flex min-100vh" >
        <div>
          <Sidebar></Sidebar>
        </div>
        <div className="w-100" >
          <Navbar></Navbar>
          <KitchenPos/>
          <OverlaySidebar></OverlaySidebar>
        </div>
      </div>
    </>
  );
}

export default App;
