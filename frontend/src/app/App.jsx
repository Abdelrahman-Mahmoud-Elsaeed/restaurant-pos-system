import Navbar from "../component/layouts/Navbar/Navbar";
import OverlaySidebar from "../component/layouts/OverlaySidebar/OverlaySidebar.jsx";
import Sidebar from "../component/layouts/Sidebar/Sidebar";
import Button from "../component/ui/Button/Button";
import Taps from "../component/ui/Taps/Taps";
import { useUI } from "../context/UiContext.jsx";

import Login from "../pages/login";

function App() {
  const {ovarlaySidebarState, setOvarlaySidebarState} = useUI()
  return (
    <>
      <div className="d-flex min-100vh" >
        <div>
          <Sidebar></Sidebar>
        </div>
        <div className="w-100" onClick={()=> ovarlaySidebarState ? setOvarlaySidebarState(!ovarlaySidebarState) : null}>
          <Navbar></Navbar>
          <div>contente</div>
          <OverlaySidebar onClick={ (e)=> e.stopPropagation() }></OverlaySidebar>
        </div>
      </div>
    </>
  );
}

export default App;
