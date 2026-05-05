import api from "../api/axios"
import END_POINTS from "../api/endpoint"
export const OrderService = {
  CreateOrder : (order) => {
    return api.post(END_POINTS.ORDERS.CREATE,order);
  },
}

