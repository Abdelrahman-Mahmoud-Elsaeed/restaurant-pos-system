
/**
 * Ui taps.
 * @param {number} fontSize - input number bettwen 1 - 5.
 * @param {string} bgColor - input css var color.
 * @param {string} fontWight - input number bettwen 1 - 5.
 * @param {string} padding - input number bettwen 1 - 5.
 * @param {string} text - input the text inside the Taps.
 * @returns {ReactDOM} Taps Ui elemnt.
 */



function Taps({fontSize=4,bgColor="--primary-color",fontWight="normal",padding="3", text="hello"}) {
  return (
    <span className={`badge fs-${fontSize} fw-${fontWight} p-${padding}`} style={{backgroundColor: `var(${bgColor})`}}>{text}</span>
  )
}


export default Taps