import React, { useState } from "react";
import { useCart } from "../Global/Cartcontext";
import "./ShoppingCart.css";
import cart_Icon from "../../assets/imgs/cart_Icon.png";
import close_Icon from "../../assets/imgs/close_Icon.png";
import { Link } from "react-router-dom";
import cartdelete_Icon from "../../assets/imgs/cartdelete_Icon.png";

const ShoppingCart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, removeFromCart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
      <div>
        {!isCartOpen && (
            <div id="cart-icon" onClick={toggleCart} className="shopping-cart-icon">
              <img src={cart_Icon} alt="Cart Icon" className="cart-icon-image" />
              {totalItems > 0 && (
                  <span
                      className={`cart-item-count ${
                          totalItems > 9 ? "large-number" : ""
                      }`}
                  >
              {totalItems}
            </span>
              )}
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

          <ul>
            {cart.map((item) => (
                <li key={item.id}>
                  <div className="row_Productcart">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="cartitem_Image"
                    />
                    <div className="nameprice_Cart">
                      <h4 className="nameproduct_Cart">{item.name}</h4>
                      <div className="priceqty_Cart">
                        <p className="qty_Cart">
                          {item.quantity} <span className="qty_Span">X</span>{" "}
                        </p>
                        <p className="price_Cart"> ${item.price}</p>
                      </div>
                    </div>
                    <img
                        src={cartdelete_Icon}
                        alt="Delete Icon"
                        className="cartdelete_Icon"
                        onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                </li>
            ))}
          </ul>

          {cart.length > 0 ? (
              <div>
                <div className="total_Cart">
                  Subtotal
                  <span className="total_Amount">
                $
                    {cart.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                    )}
              </span>
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
