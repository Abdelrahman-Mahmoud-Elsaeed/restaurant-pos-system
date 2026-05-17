import Style from "./OrderColumn.module.css";

export default function OrderColumn({ color, counter, status, children }) {
  return (
    <div className={Style.columnContainer}>
      
      {/* White Header Section */}
      <div className={Style.columnHeader}>
        <div className={Style.statusGroup}>
          <span 
            className={Style.statusIndicator} 
            style={{ backgroundColor: color }}
          ></span>
          <h2 className={Style.statusTitle}>{status}</h2>
        </div>
        
        <div className={Style.counterBadge}>
          {counter}
        </div>
      </div>

      <div className={Style.cardsList}>
        {children}
      </div>
      
    </div>
  );
}