import Style from "./State.module.css";

 export default function Ordercard({ color, counter ,status}) {
  return (
    <>
      <div className={`${Style.NewOrders}`}>
        
        <div className={`${Style.colorHead}`}>
          <div> 
             <span 
              className={`${Style.ColortState}`} 
              style={{ backgroundColor: color }}
            >
            </span>
          </div>
          <div>
            <h1>{status}</h1>
          </div>
        </div>

        <div className={Style.counter}>
          <div className={Style.Num}>
            <span>{counter}</span>
          </div>
        </div>

      </div>
    </>
  );
}