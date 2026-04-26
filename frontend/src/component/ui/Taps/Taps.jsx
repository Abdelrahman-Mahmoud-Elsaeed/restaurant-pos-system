
/**
 * Ui taps.
 * @param {number} fontSize - input number bettwen 1 - 5.
 * @param {string} bgColor - input css var color.
 * @param {string} fontWight - input number bettwen 1 - 5.
 * @param {string} padding - input number bettwen 1 - 5.
 * @param {string} text - input the text inside the Taps.
 * @returns {ReactDOM} Taps Ui elemnt.
 */



function Taps({fontSize=4,fontWight="normal", text="hello",variant="primary",styles}) {
  const baseStyles = {
    padding: "12px 24px",
    minWidth: "100px",
    boxShadow: "0px 1px 2px rgba(127, 29, 29, 0.2)",
    borderRadius: "8px",
    border:"2px solid transparent"
  };
  const variantStyles = {
    primary: {
      backgroundColor: "var(--primary-color)",
    },
    secondary: {
      backgroundColor: "var(--main-bg-color)",
      borderColor: "#CBD5E1",
      color: "var(--text-color-2)",
    },
  }
  return (
    <span className={`badge fs-${fontSize} fw-${fontWight}`} style={{...baseStyles,...variantStyles[variant],...styles}}>{text}</span>
  )
}


export default Taps