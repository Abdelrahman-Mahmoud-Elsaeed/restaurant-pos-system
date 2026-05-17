import React, { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedOrder = localStorage.getItem("currentOrder");
    return savedOrder ? JSON.parse(savedOrder) : [];
  });

  useEffect(() => {
    localStorage.setItem("currentOrder", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (newItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === newItem.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCartItems(
      (prev) =>
        prev
          .map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + delta };
            }
            return item;
          })
          .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearOrder = () => {
    setCartItems([]);
  };

  const TAX_RATE = 0.085;

  const subtotal = cartItems.reduce((total, item) => {
    const modifierCosts =
      item.modifiers?.reduce((sum, mod) => sum + (mod.price || 0), 0) || 0;
    const itemTotal = (item.price + modifierCosts) * item.quantity;
    return total + itemTotal;
  }, 0);

  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax;

  return (
    <OrderContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeItem,
        clearOrder,
        subtotal,
        tax,
        total,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

// Custom Hook for easy usage
// eslint-disable-next-line react-refresh/only-export-components
export function useOrder() {
  return useContext(OrderContext);
}
