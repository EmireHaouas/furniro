import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCartFromLocalStorage());

  const addToCart = (product, quantity) => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
    };

    setCart((prevCart) => {
      const updatedCart = prevCart.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p
      );

      if (!prevCart.some((p) => p.id === item.id)) {
        updatedCart.push(item);
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
          .map((item) => {
            if (item.id === id) {
              if (item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
              } else {
                return null;
              }
            }
            return item;
          })
          .filter((item) => item !== null);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
        {children}
      </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
