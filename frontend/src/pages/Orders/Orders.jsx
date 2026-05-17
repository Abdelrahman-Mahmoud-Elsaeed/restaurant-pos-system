
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderColumn from "../../component/ui/OrderColumn/OrderColumn";
import OrderCard from "../../component/ui/OrderCard/OrderCard";



export default function Orders() {
  const newOrdersList = [
    {
      code: "1042",
      place: "DINE-IN",
      table: "12",
      time: "05:24",
      orders: [
        { quantity: 2, main: "Classic Smashburger", sub: ["No Onions", "Extra Pickles"] },
        { quantity: 1, main: "Large Fries" }
      ]
    }
  ];
  return (
    <div className="container-fluid d-flex gap-4 p-4 dashboard-layout">
      
      {/* COLUMN 1 */}
      <OrderColumn color="#EF4444" counter={3} status="New Orders">
        {newOrdersList.map(order => (
          <OrderCard key={order.code} state="new" {...order} />
        ))}
      </OrderColumn>

      {/* COLUMN 2 */}
      <OrderColumn color="#2563EB" counter={2} status="Preparing">
        <OrderCard 
          state="preparing" 
          code="1039" 
          place="DELIVERY" 
          table="UBEREATS" 
          time="12:45"
          orders={[{ quantity: 3, main: "Onion Rings" }]} 
        />
      </OrderColumn>

      {/* COLUMN 3 */}
      <OrderColumn color="#10B981" counter={1} status="Ready">
         {/* Ready cards here */}
      </OrderColumn>

    </div>
  );
}