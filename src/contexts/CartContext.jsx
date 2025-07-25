import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart (product) {
    console.log(product);
    console.log(cart);
    setCart((prevCart) => {
      const isExisting = prevCart.find((item) => item.id === product.id);
      if (isExisting) {
        return prevCart.map((item) => item.id === product.id
          ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}