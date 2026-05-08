export const END_POINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
  },
  PRODUCTS: {
    CREATE: "/product",
    UPDATE: (id)=> `/product/${id}`,
    LIST:"/product",
    DETAILS: (id)=> `/product/${id}`,
    DELETE: (id)=> `/product/${id}`,
  },
  ORDERS: {
    CREATE: "/order",
    UPDATE: (id)=> `/order/${id}`,
    LIST:"/order",
    DETAILS: (id)=> `/order/${id}`,
    DELETE: (id)=> `/order/${id}`,
  },
}