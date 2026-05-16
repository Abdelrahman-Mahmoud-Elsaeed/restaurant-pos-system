import {
  faBell,
  faMoon,
  faCircleUser,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Style from "./Nav.module.css";
export default function Navbar() {
  return (
    <>
      <div className={`${Style.container}`}>
        <div className={`${Style.Logo}`}>
          <h1>Orders Dashboard</h1>
         <div className={`${Style.Links}`}>
           <a href="">All</a>
          <a href="">Active</a>
          <a href="">Ready</a>
          <a href="">Completed</a>
         </div>
        </div>

        <div className={`${Style.Items}`}>
          <FontAwesomeIcon icon={faBell} className="fs-4" />
          <FontAwesomeIcon icon={faMoon} className="fs-4" />
          <FontAwesomeIcon icon={faCircleUser} className="fs-4" />
        </div>
      </div>
    </>
  );
}
