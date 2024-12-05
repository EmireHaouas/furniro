import React, { createContext, useState, useContext } from "react";

// Créer le contexte
const CartContext = createContext();

// Hook pour accéder au contexte
export const useCart = () => useContext(CartContext);

// Fournisseur pour le contexte
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Ajouter un produit au panier
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      // Vérifier si le produit est déjà dans le panier
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Mettre à jour la quantité si déjà présent
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      // Sinon, ajouter le produit au panier
      return [...prevCart, { ...product, quantity }];
    });
  };

  // Supprimer un produit du panier
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // Vider le panier
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
