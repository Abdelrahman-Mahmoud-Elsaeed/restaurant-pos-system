import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCashRegister, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./OverlaySidebar.module.css";
import Button from "../../ui/Button/Button";
import { useUI } from "../../../context/UiContext";
import { useOrder } from "../../../context/Order.context";
import OrderItemCard from "../../ui/OrderItemCard/OrderItemCard";

function OverlaySidebar() {
  const { ovarlaySidebarState, setOvarlaySidebarState } = useUI();
  const { cartItems, clearOrder, subtotal, tax, total } = useOrder();

  return (
    <div
      role="dialog"
      aria-modal="true"
      className={` ${styles.overlay} ${ovarlaySidebarState ? "d-block" : "d-none"} vh-100 top-0 end-0 position-absolute`}
    >
      <div className="d-flex align-items-start w-100 h-100 flex-column">
        <div
          className={`d-flex justify-content-between w-100 align-items-center p-4   ${styles.headerNav}`}
        >
          <div className={styles.orderHeader}>
            <h3>Current Order</h3>
            <span>Order #4092 • Dine-in</span>
          </div>
          
          <div className="d-flex align-items-center gap-3">
            {/* Clear Order Button */}
            <div
              className="NavIcon p-2"
              onClick={clearOrder}
              style={{ cursor: "pointer" }}
              title="Clear Order"
            >
              <FontAwesomeIcon icon={faTrashCan} className={styles.trashIcon} />
            </div>

            {/* Close Sidebar Button */}
            <div
              className="NavIcon p-2"
              onClick={() => setOvarlaySidebarState(false)}
              style={{ cursor: "pointer", fontSize: "1.5rem" }}
              title="Close Sidebar"
            >
              <FontAwesomeIcon icon={faXmark} className="text-secondary" />
            </div>
          </div>
        </div>

        {/* 2. Map through dynamic cartItems. Added padding and overflow so the list scrolls */}
        <div className={`${styles.NavBody} w-100 h-100 p-4 overflow-auto`}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <OrderItemCard key={item.id} item={item} />
            ))
          ) : (
            <div className="text-center text-muted mt-5 fs-5">Cart is empty</div>
          )}
        </div>

        {/* 3. Output dynamic totals */}
        <div className={` totalWapper p-4 w-100 ${styles.NavFooter}`}>
          <div className={`${styles.subtotal}`}>
            <div className="d-flex justify-content-between align-items-center my-2">
              <span>Subtotal</span>
              <h3>${subtotal.toFixed(2)}</h3>
            </div>
            <div className="d-flex justify-content-between align-items-center my-2">
              <span>tax (8.5%)</span>
              <h3>${tax.toFixed(2)}</h3>
            </div>
          </div>
          <div className={`${styles.total}`}>
            <div className="d-flex justify-content-between align-items-center my-2">
              <h2>total</h2>
              <h3 className=" text-danger">${total.toFixed(2)}</h3>
            </div>
          </div>
        </div>

        <div className={`w-100 px-4 pb-4 ${styles.checkout}`}>
          <Button variant="primary" size="lg" className="w-100 gap-3">
            <FontAwesomeIcon icon={faCashRegister} />
            <span className="text-white fs-4">Pay ${total.toFixed(2)}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default OverlaySidebar;