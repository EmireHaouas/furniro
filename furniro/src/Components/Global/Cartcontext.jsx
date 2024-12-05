// Cartcontext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

// Création du contexte
const CartContext = createContext();

// Fonction pour récupérer le panier à partir du localStorage
const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

// Fournisseur du contexte
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCartFromLocalStorage());

  // Fonction pour ajouter un produit au panier
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
        p.id === item.id
          ? { ...p, quantity: p.quantity + quantity }
          : p
      );

      if (!prevCart.some((p) => p.id === item.id)) {
        updatedCart.push(item);
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Mettre à jour le localStorage
      return updatedCart;
    });
  };

  // Fonction pour supprimer un produit ou réduire la quantité dans le panier
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

      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Mettre à jour le localStorage
      return updatedCart;
    });
  };

  // Synchroniser le panier dans localStorage à chaque changement
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

// Utilisation du hook useCart
export const useCart = () => useContext(CartContext);
