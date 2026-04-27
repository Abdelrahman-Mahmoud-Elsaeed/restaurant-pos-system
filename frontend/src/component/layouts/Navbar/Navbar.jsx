import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faBell,faMoon,faCircleUser } from '@fortawesome/free-solid-svg-icons'
import styles from "./Navbar.module.css"
import Button from '../../ui/Button/Button';

function Navbar() {
  return (
    <>
      <nav className='d-flex mx-4'>
        <div className="input-group position-relative">
          <input
            type="text"
            className="form-control ps-4 rounded-1"
            placeholder="Search menu items..."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon}/>
        </div>
        <div className='d-flex '>
          <div className='d-flex '>
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faMoon} />
            <FontAwesomeIcon icon={faCircleUser} />
          </div>
          <Button  text="New Order"></Button>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
