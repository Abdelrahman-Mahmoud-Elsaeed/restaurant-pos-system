import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { faClock, faCircleCheck } from "@fortawesome/free-regular-svg-icons";

import style from "./OrderCard.module.css";
import OrderItem from "../OrderItem/OrderItem";

export default function OrderCard({ state = "new", orders = [], time, code, table, place }) {
  
  const statusConfig = {
    new: {
      cardStyle: style.cardNew,
      badgeClass: style.badgeRed,
      badgeIcon: faClock,
      badgeText: time,
      btnClass: style.btnRed,
      btnText: "Start Preparing",
      btnIcon: faPlay
    },
    preparing: {
      cardStyle: style.cardPreparing,
      badgeClass: style.badgeBlue,
      badgeIcon: faClock,
      badgeText: time,
      btnClass: style.btnBlue,
      btnText: "Mark Ready",
      btnIcon: faCircleCheck
    },
    ready: {
      cardStyle: style.cardReady, 
      badgeClass: style.badgeGreen,
      badgeIcon: faCheckDouble,
      badgeText: "Ready",
      btnClass: style.btnOutline, 
      btnText: "Handed Off",
      btnIcon: faCircleCheck
    },
  };

  const currentStatus = statusConfig[state] || statusConfig.new;
  
  return (
    <div className={`${style.Ordercard} ${currentStatus.cardStyle}`}>
      
      <div className="d-flex justify-content-between p-3 align-items-center">
        <div className="d-flex flex-column">
          <span className={style.code}>#{code}</span>
          <span className={style.code2}>
            {place} {table ? `• ${table}` : ""}
          </span>
        </div>

        <div className={`${style.badge} ${currentStatus.badgeClass} d-flex align-items-center gap-2`}>
          <FontAwesomeIcon icon={currentStatus.badgeIcon} />
          <span>{currentStatus.badgeText}</span>
        </div>
      </div>
      
      <hr className="m-0" style={{ opacity: 0.1 }} />
      
      <div className="p-3 d-flex flex-column gap-3">
        {orders.map((item, index) => (
          <OrderItem 
            key={index} 
            quantity={item.quantity} 
            main={item.main} 
            sub={item.sub} 
            isFaded={item.completed} 
          />
        ))}
      </div>

      <div className="px-3 pb-3">
        <button className={`${style.button} ${currentStatus.btnClass}`}>
          <FontAwesomeIcon icon={currentStatus.btnIcon} className="pe-2 text-white" />
          {currentStatus.btnText}
        </button>
      </div>
      
    </div>
  );
}