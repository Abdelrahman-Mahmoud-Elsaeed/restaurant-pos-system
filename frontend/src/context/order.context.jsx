import { createContext } from "react";
import { useOrder } from "../hooks/order.hook";

export const  OrderProvider = ({children}) => {
  const order = useOrder()
    return (
      <OrderContext.Provider value={ order }>
        {children}
      </OrderContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const OrderContext = createContext(null);
