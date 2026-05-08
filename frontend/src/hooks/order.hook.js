import { useState } from "react";
import { OrderService } from "../services/order.service";

export const useOrder = () => {
  const [order, SetOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  const CreaetOrder = (orderData) => {
    setLoading(false);
    OrderService.CreateOrder(orderData)
      .then((res) => {
        SetOrder(res);
      })
      .catch((error) => console.log(error));
  };
  return { CreaetOrder, order, loading };
};
