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
  const { sidebarState, setOvarlaySidebarState } = useUI();

  const linkClass = ({ isActive }) =>
    `${styles.navItem} ${isActive ? styles.active : ""}`;

  return (
    <aside className={`border-end ${sidebarState ? "d-block" : "d-none"}`}>
      {/* Header */}
      <div className="d-flex align-items-center py-3 mx-2 border-bottom">
        <div className={`p-2 m-2 ${styles.dFaShop}`}>
          <FontAwesomeIcon icon={faShop} className={styles.faShop} />
        </div>
        <h3 className={`m-0 ${styles.header}`}>Kinetic POS</h3>
      </div>

      <ul
        className="navbar-nav p-3"
        onClick={() => setOvarlaySidebarState(false)}
      >
        <NavLink to="/" className={linkClass}>
          <ReceiptIcon />
          <span>Register</span>
        </NavLink>

        <NavLink to="/orders" className={linkClass}>
          <FontAwesomeIcon icon={faReceipt} />
          <span>Orders</span>
        </NavLink>

        <NavLink to="/inventory" className={linkClass}>
          <FontAwesomeIcon icon={faBoxArchive} />
          <span>Inventory</span>
        </NavLink>

        <NavLink to="/dashboard" className={linkClass}>
          <DashboardIcon />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/settings" className={linkClass}>
          <FontAwesomeIcon icon={faGear} />
          <span>Settings</span>
        </NavLink>
      </ul>
    </aside>
  );
}

export default Sidebar;
