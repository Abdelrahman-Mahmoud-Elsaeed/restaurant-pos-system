import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faMoon,
  faCircleUser,
} from "@fortawesome/free-regular-svg-icons";
import styles from "./Navbar.module.css";
import Button from "../../ui/Button/Button";
import { useUI } from "../../../context/UiContext";

function Navbar() {
  const { sidebarState, setSidebarState } = useUI(); 
  const {ovarlaySidebarState, setOvarlaySidebarState} = useUI()

  return (
    <>
      <nav className="d-flex py-2 px-4">
        <div className="d-flex align-items-center justify-content-center" onClick={()=> setSidebarState(!sidebarState)}>
          <FontAwesomeIcon icon={faBars} className="fs-4" />
        </div>
        <div className="d-flex justify-content-between w-100">
          <div className="input-group position-relative align-items-center d-sm-block d-none">
            <input
              type="text"
              className="rounded-1 h-100"
              placeholder="Search menu items..."
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={`${styles.searchIcon}  ${styles.iconPos} `}
            />
          </div>
          <div className="d-flex align-items-center"></div>
          <div className="d-flex align-items-center w-100 justify-content-end ">
            <div
              className={`d-flex gap-4 h-100 align-items-center justify-content-between mx-4 pe-2 border-end flex-sm-grow-0 flex-grow-1 ${styles.iconsGroup}`}
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={`${styles.searchIcon} d-sm-none d-block`}
              />
              <FontAwesomeIcon icon={faBell} className="fs-4" />
              <FontAwesomeIcon icon={faMoon} className="fs-4" />
              <FontAwesomeIcon icon={faCircleUser} className="fs-4" />
            </div>
            <Button fontSize={6}  onClick={()=> ovarlaySidebarState ? null : setOvarlaySidebarState(!ovarlaySidebarState)}> 
              New Order
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
