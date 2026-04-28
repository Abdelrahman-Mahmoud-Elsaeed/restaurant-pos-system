import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReceipt,
  faBoxArchive,
  faGear,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Sidebar.module.css";

import { NavLink } from "react-router-dom";

import ReceiptIcon from "../../../assets/icons/receipt.svg?react";
import DashboardIcon from "../../../assets/icons/dashboard.svg?react";
import { useUI } from "../../../context/UiContext";

function Sidebar() {
  const { sidebarState } = useUI(); 
  
  return (
    <aside className={`border-end ${sidebarState ? "d-block":"d-none"}`} >
      <div className="d-flex  align-items-center py-3 mx-2 border-bottom">
        <div className={`p-2 m-2 ${styles.dFaShop}`}>
          <FontAwesomeIcon icon={faShop} className={styles.faShop} />
        </div>
        <h3 className={`m-0 ${styles.header}`}>Kinetic POS</h3>
      </div>
      <div className="pt-4 ">
        <ul className="navbar-nav p-3">
          <NavLink to="/" className=" text-decoration-none">
            {({ isActive }) => (
              <li
                className={`nav-item p-2 my-2 d-flex gap-2 align-items-center ${isActive ? styles.activeLi : ""}`}
              >
                <ReceiptIcon className={styles.ReceiptIcon} />
                <h3
                  aria-current="page"
                  className={`${isActive ? styles.activeA : styles.link} m-0`}
                >
                  Register
                </h3>
              </li>
            )}
          </NavLink>
          <NavLink to="/orders" className=" text-decoration-none">
            {({ isActive }) => (
              <li
                className={`nav-item p-2 my-2 d-flex gap-2 align-items-center ${isActive ? styles.active : ""}`}
              >
                <FontAwesomeIcon icon={faReceipt} />
                <h3
                  className={`${isActive ? styles.activeA : styles.link} m-0`}
                >
                  Orders
                </h3>
              </li>
            )}
          </NavLink>
          <NavLink to="/inventory" className=" text-decoration-none">
            {({ isActive }) => (
              <li
                className={`nav-item p-2 my-2 d-flex gap-2 align-items-center ${isActive ? styles.active : ""}`}
              >
                <FontAwesomeIcon icon={faBoxArchive} />
                <h3
                  className={`${isActive ? styles.activeA : styles.link} m-0`}
                >
                  Inventory
                </h3>
              </li>
            )}
          </NavLink>
          <NavLink to="/dashboard" className=" text-decoration-none">
            {({ isActive }) => (
              <li
                className={`nav-item p-2 my-2 d-flex gap-2 align-items-center ${isActive ? styles.active : ""}`}
              >
                <DashboardIcon ></DashboardIcon>
                <h3
                  className={`${isActive ? styles.activeA : styles.link} m-0`}
                >
                  Dashboard
                </h3>
              </li>
            )}
          </NavLink>
          <NavLink to="/settings" className=" text-decoration-none">
            {({ isActive }) => (
              <li
                className={`nav-item p-2 my-2 d-flex gap-2 align-items-center ${isActive ? styles.active : ""}`}
              >
                <FontAwesomeIcon icon={faGear} />
                <h3
                  className={`${isActive ? styles.activeA : styles.link} m-0`}
                >
                  Settings
                </h3>
              </li>
            )}
          </NavLink>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
