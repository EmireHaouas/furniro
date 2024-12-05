// Cart.jsx
import React from "react";
import { useCart } from "../Global/Cartcontext"; // Importer le contexte
import './cart.css';
import bannercart from '../../assets/imgs/bannercart.png';

const Cart = () => {
  const { cart } = useCart(); // Récupérer les produits du panier

  // Vérifie si le panier est vide
  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div>
      <img className="banner_Cart" src={bannercart} alt="bannercart" />
      
      <h1>Shopping Cart</h1>

      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Afficher le total du panier */}
      <div className="cart-total">
        <h2>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h2>
      </div>
    </div>
  );
};

export default Cart;
