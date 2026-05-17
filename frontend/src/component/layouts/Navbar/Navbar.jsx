import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";

import {
  faBell,
  faMoon,
  faCircleUser,
} from "@fortawesome/free-regular-svg-icons";

import styles from "./Navbar.module.css";
import Button from "../../ui/Button/Button";
import { useUI } from "../../../context/UiContext";

const filters = ["All", "Active", "Ready", "Completed"];

function Navbar() {
  const {
    sidebarState,
    setSidebarState,
    setOvarlaySidebarState,
    activeFilter,
    setActiveFilter,
  } = useUI();

  const location = useLocation();

  const isOrdersPage = location.pathname === "/orders";

  return (
    <nav className="d-flex py-2 px-4">
      <div
        className="d-flex align-items-center justify-content-center"
        onClick={() => setSidebarState(!sidebarState)}
      >
        <FontAwesomeIcon icon={sidebarState ? faX : faBars} className="fs-4" />
      </div>

      <div className="d-flex justify-content-between w-100">
        <div className="d-flex align-items-center w-100">
          {!isOrdersPage && (
            <div className="input-group position-relative">
              <input
                type="text"
                className="form-control ps-4 rounded-1"
                placeholder="Search menu items..."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={`${styles.searchIcon} ${styles.iconPos}`}
              />
            </div>
          )}

          {/* ORDERS PAGE → show header + filters */}
          {isOrdersPage && (
            <div className={styles.leftSection}>
              <div>
                <h1 className={styles.title}>Orders Dashboard</h1>
              </div>

              <nav className={styles.links}>
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`${styles.filterButton} ${
                      activeFilter === filter ? styles.activeFilter : ""
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="d-flex align-items-center w-100 justify-content-end">
          <div
            className={`d-flex gap-4 h-100 align-items-center justify-content-between mx-4 pe-2 ${isOrdersPage ? "" : "border-end"}  flex-sm-grow-0 flex-grow-1 ${styles.iconsGroup}`}
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={`${styles.searchIcon} d-sm-none d-block`}
            />
            <FontAwesomeIcon icon={faBell} className="fs-4" />
            <FontAwesomeIcon icon={faMoon} className="fs-4" />
            <FontAwesomeIcon icon={faCircleUser} className="fs-4" />
          </div>
          {!isOrdersPage && (
            <Button fontSize={6} onClick={() => setOvarlaySidebarState(true)}>
              New Order
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
