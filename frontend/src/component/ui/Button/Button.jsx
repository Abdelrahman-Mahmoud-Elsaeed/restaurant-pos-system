import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary", // 'primary', 'secondary', or 'danger'
  size = "md",         // 'sm', 'md', or 'lg'
  onClick,
  className = ""       // Allow passing extra classes if needed
}) {
  return (
    <button
      type="button"
      className={`${styles.btnBase} ${styles[variant]} ${styles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}