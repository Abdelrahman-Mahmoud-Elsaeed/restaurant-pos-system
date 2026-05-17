import React from "react";
import styles from "./OrderItemCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faCirclePlus,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useOrder } from "../../../context/Order.context";

export default function OrderItemCard({ item }) {
  const { updateQuantity } = useOrder();

  const modifierCosts =
    item.modifiers?.reduce((sum, mod) => sum + (mod.price || 0), 0) || 0;
  const itemDisplayPrice = item.price + modifierCosts;

  return (
    <div className={`${styles.card} ${item.isActive ? styles.activeCard : ""}`}>
      <div className={styles.header}>
        <h4 className={styles.itemName}>{item.title || item.name}</h4>
        <span className={styles.itemPrice}>${itemDisplayPrice.toFixed(2)}</span>
      </div>

      {item.subtext && <div className={styles.subtext}>{item.subtext}</div>}

      {item.modifiers && item.modifiers.length > 0 && (
        <div className={styles.modifiersList}>
          {item.modifiers.map((mod, index) => (
            <div
              key={index}
              className={
                mod.type === "remove"
                  ? styles.modifierRemove
                  : styles.modifierAdd
              }
            >
              <FontAwesomeIcon
                icon={mod.type === "remove" ? faCircleMinus : faCirclePlus}
                className={styles.modIcon}
              />
              <span>{mod.text}</span>
              {mod.price > 0 && (
                <span className={styles.modPrice}>
                  (+${mod.price.toFixed(2)})
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      <hr className={styles.divider} />

      <div className={styles.footer}>
        <div
          className={`${styles.qtyControl} ${item.isActive ? styles.qtyActive : ""}`}
        >
          <button
            className={styles.qtyBtn}
            onClick={() => updateQuantity(item.id, -1)}
          >
            <FontAwesomeIcon icon={item.quantity === 1 ? faTrash : faMinus} />
          </button>

          <span className={styles.qtyNumber}>{item.quantity}</span>

          <button
            className={styles.qtyBtn}
            onClick={() => updateQuantity(item.id, 1)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        {item.showEdit && <button className={styles.editBtn}>Edit</button>}
      </div>
    </div>
  );
}