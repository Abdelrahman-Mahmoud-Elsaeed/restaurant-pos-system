
/**
 * Ui Button 
 * @param {number} fontSize - input number bettwen 1 - 5.
 * @param {string} bgColor - input css var color.
 * @param {string} fontWight - input number bettwen 1 - 5.
 * @param {string} padding - input number bettwen 1 - 5.
 * @param {string} text - input the text inside the Taps.
 * @returns {number} The sum of the two numbers.
 */



function Button({fontSize=4,fontWight="normal",padding="3", text="Primary",variant}) {
  const baseStyles = {
    primary: {
      backgroundColor:"var(--primary-color)",
      boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      borderRadius: "16px",
      padding:"15px 30px",
      color:"#ffff",
      minWidth: "120px",

    },
    secondary: {
      backgroundColor:"var(--primary-color)",
      boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
      borderRadius: "16px",
      padding:"15px 30px"
    },
  }
  return (
    <button type="button" className={`fs-${fontSize} w-${fontWight} p-${padding}`} style={baseStyles[variant]}>{text}</button>
  )
}


export default Button