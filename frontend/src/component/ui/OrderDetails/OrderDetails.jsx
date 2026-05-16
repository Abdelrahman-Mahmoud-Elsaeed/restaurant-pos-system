import style from "./OrderDetails.module.css";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Order from "../Order/Order"
import { useState } from "react";
//props : {color , code , place , table , order , time , state}
//order is an array one order per table
export default function OrderDetails({state = "new" , orders , time , code , table ,place}) {
  const statusConfig = {
    new: {
      color: "c-red",
      timecolor : "timecolor-red",
      title: "Start Preparing",
    },
    pending: {
      color: "c-blue",
      timecolor : "timecolor-blue",
      title: "Pending Orders",
    },
    ready: {
      color: "c-green",
      timecolor : "timecolor-green",
      title: "Ready Orders",
    },
  };

  const currentStatus = statusConfig[state];
  
  return (
    <div className={`${style.Ordercard} `}>

      <div className= {`${style.head} d-flex  justify-content-between p-3`}>
        <div className={` d-flex flex-column gap-3`}>
          <span className={`${style.code}`}>#{code}</span>
          <span className={`${style.code2}`}>
            {place} • TABLE {table}
          </span>
        </div>

        <div className={`${style.bg} ${style[statusConfig.timecolor]}`}>
          <span className={`pe-2 ${style.clock} `}><i class="fa-regular fa-alarm-clock"></i></span>
          {time} : 00
        </div>
      </div>
      <hr className="m-0"/>
      {
        orders.map((order,indx)=>(
          <Order quantity= {order.quantity} main = {order.main}  sub = {order.sub}/>
        ))
      }
   <div className={`${style.btn}`}>
       <button className={`${style[currentStatus.color]} ${style.button}`}>
        <i className="fa-solid fa-play pe-4"></i>
        {currentStatus.title}</button>
   </div>
    </div>
  );
}
