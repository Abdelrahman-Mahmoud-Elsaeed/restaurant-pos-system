import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCashRegister } from "@fortawesome/free-solid-svg-icons";
import styles from "./OverlaySidebar.module.css";
import Button from "../../ui/Button/Button";
import { useUI } from "../../../context/UiContext";

function OverlaySidebar() {
  const {ovarlaySidebarState} = useUI()
  return (
    <div
      role="dialog"
      aria-modal="true"
      className={` ${styles.overlay} ${ovarlaySidebarState ? "d-block":"d-none"} vh-100 top-0 end-0 position-absolute`}
    >
      <div className="d-flex align-items-start w-100 h-100 flex-column">
        <div
          className={`d-flex justify-content-between w-100 align-items-center p-4   ${styles.headerNav}`}
        >
          <div className={styles.orderHeader}>
            <h3>Current Order</h3>
            <span>Order #4092 • Dine-in</span>
          </div>
          <div className="NavIcon p-2 mx-2">
            <FontAwesomeIcon icon={faTrashCan} className={styles.trashIcon} />
          </div>
        </div>
        <div className={`${styles.NavBody} w-100 h-100`}></div>
        <div className={` totalWapper p-4 w-100 ${styles.NavFooter}`}>
          <div className={`${styles.subtotal}`}>
            <div className="d-flex justify-content-between align-items-center my-2">
              <span>Subtotal</span>
              <h3>$20.96</h3>
            </div>
            <div className="d-flex justify-content-between align-items-center my-2">
              <span>tax (8.5%)</span>
              <h3>$1.96</h3>
            </div>
          </div>
          <div className={`${styles.total}`}>
            <div className="d-flex justify-content-between align-items-center my-2">
              <h2>total</h2>
              <h3 className=" text-danger">$22.77</h3>
            </div>
          </div>
        </div>
        <div className={`w-100 px-4 pb-4 ${styles.checkout}`}>
          <Button fontSize={4} styles={{width:"100%",gap:"15px"}} >
            <FontAwesomeIcon icon={faCashRegister} />
            <h3>Pay $22.74</h3>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OverlaySidebar;
