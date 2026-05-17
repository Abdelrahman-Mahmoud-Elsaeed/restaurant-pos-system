import styles from "./Tab.module.css";

/**
 * UI Tab Component
 * @param {string} text - The label inside the Tab.
 * @param {boolean} active - Set to true for the selected state (Red).
 * @param {function} onClick - Function to handle click events.
 */
export default function Tab({ text = "Tab", active = false, onClick }) {
  const variantClass = active ? styles.primary : styles.secondary;

  return (
    <button 
      type="button"
      className={`${styles.tabBase} ${variantClass}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
}