import React, { useState } from "react";
import { useCart } from "../Global/Cartcontext"; // Importer le contexte
import "./ShoppingCart.css";
import cart_Icon from "../../assets/imgs/cart_Icon.png";
import close_Icon from "../../assets/imgs/close_Icon.png";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, removeFromCart } = useCart(); // Obtenir les articles du panier

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      {!isCartOpen && (
        <div id="cart-icon" onClick={toggleCart} className="shopping-cart-icon">
          <img src={cart_Icon} alt="Cart Icon" className="cart-icon-image" />
        </div>
      )}

      {isCartOpen && <div id="overlay" onClick={toggleCart}></div>}

      <div id="shopping-cart" className={isCartOpen ? "active" : ""}>
        <div className="row1">
          <button className="close-btn" onClick={toggleCart}>
            <img src={close_Icon} alt="Close Icon" className="close_icon" />
          </button>
          <h3 className="title_Cart">Shopping Cart</h3>
          <hr />
        </div>

        {/* Liste des articles dans le panier */}
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <div>
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>

        {cart.length > 0 ? (
          <div>
            <div className="subtotal">
              Total: $
              {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
            </div>
            <hr />
            <div className="button_Cart">
              <Link to="/cart" className="cart_Button">
                View Cart
              </Link>
              <Link to="/checkout" className="checkout_Button">
                Checkout
              </Link>
            </div>
          </div>
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
