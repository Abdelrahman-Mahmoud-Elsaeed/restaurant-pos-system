import Navbar from "../component/layouts/Navbar/Navbar"
import Sidebar from "../component/layouts/Sidebar/Sidebar";
import  Button  from "../component/ui/Button/Button"
import Taps from "../component/ui/Taps/Taps"

import Login from "../pages/login";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="d-flex">
        <Sidebar></Sidebar> 
        <div>
          contente
        </div>
      </div>
    </>
  )
}

export default App
