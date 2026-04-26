/**
 * Ui Button
 * @param {number} fontSize - input number bettwen 1 - 5.
 * @param {string} bgColor - input css var color.
 * @param {string} fontWight - input number bettwen 1 - 5.
 * @param {string} padding - input number bettwen 1 - 5.
 * @param {string} text - input the text inside the Taps.
 * @returns {number} The sum of the two numbers.
 */

function Button({
  fontSize = 4,
  fontWight = "normal",
  text = "primary",
  variant,
  styles,
}) {
  const baseStyles = {
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",

    borderRadius: "16px",

    padding: "15px 30px",

    color: "#ffff",

    minWidth: "120px",

    borderColor: "#fff",
  };
  const variantStyles = {
    primary: {
      backgroundColor: "var(--primary-color)",
    },
    secondary: {
      backgroundColor: "var(--main-bg-color)",
      borderColor: "#CBD5E1",
      color: "var(--text-color-4)",
      borderWidth:"2px"
    },
  };
  return (
    <button
      type="button"
      className={`fs-${fontSize} w-${fontWight}`}
      style={{  ...baseStyles, ...variantStyles[variant] , ...styles}}
    >
      {text}
    </button>
  );
}

export default Button;
