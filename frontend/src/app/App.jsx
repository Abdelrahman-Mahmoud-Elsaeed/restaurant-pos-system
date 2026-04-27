import Navbar from "../component/layouts/Navbar/Navbar";
import Sidebar from "../component/layouts/Sidebar/Sidebar";
import Button from "../component/ui/Button/Button";
import Taps from "../component/ui/Taps/Taps";

import Login from "../pages/login";

function App() {
  return (
    <>
      <div className="d-flex">
        <div>
          <Sidebar></Sidebar>
        </div>
        <div className="w-100">
          <Navbar></Navbar>
          <div>contente</div>
        </div>
      </div>
    </>
  );
}

export default App;
