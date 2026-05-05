import styles from "./Cartitem.module.css";
import minusIcon from "../../../assets/icons/Icon.svg"
import plusIcon from "../../../assets/icons/plus.svg"

function Cartitem({ tittle = "Classic Double Cheeseburger", price = 14.5, cart = 1 }) {
    return (
        <div className={`card ${styles.cardWidth} m-auto mt-2`}>
            <div className="card-body">
                <div className="d-flex gap-3">
                    <h5 className="card-title fw-normal">{tittle}</h5>
                    <h5 className="card-title fw-bolder">{price}$</h5>
                </div>
                <div className="d-flex gap-2 align-items-center my-1 ">
                    <img src={minusIcon} alt="" />
                    <h6 className={`${styles.fontRed} card-subtitle`}> No Onions</h6>

                </div>
                <div className="d-flex gap-2 align-items-center my-1 border-bottom py-2 border-opacity-25 ">
                    <img src={plusIcon} alt="" />
                    <h6 className={`${styles.fontSub} card-subtitle`}> Extra Bacon </h6>
                    <span className={`${styles.fontSub} card-subtitle`}>(+$15)</span>
                </div>
                <div className="d-flex justify-content-between">
                    <div className={`d-flex align-items-center justify-content-around border border-opacity-75 rounded py-2 my-2 bg-light ${styles.w9}`} >
                        <button  className={`${styles.btnGray} ${styles.fontC1} fs-5`}> - </button>
                        <span className={`${styles.fontC1} fs-5`}>{cart}</span>
                        <button  className={`${styles.btnGray} ${styles.fontC1} fs-5`}> + </button>
                    </div>
                    <button className={`${styles.btnGray} ${styles.fontSub}`}> Edit</button>
                </div>
            </div>
        </div>
    );
}

export default Cartitem;