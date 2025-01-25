import React from "react";
import { useCart } from "../Global/Cartcontext";
import './cart.css';
import bannercart from '../../assets/imgs/bannercart.webp';
import Warranty from '../Global/Warranty';
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div>
      <img className="banner_Cart" src={bannercart} alt="bannercart" />

      <div className="shoppingcart_Check">
        <div className="entire_Cart">
          <div className="kikk">
        <div className="row_Summary">
              <p className="p_Prod">Product</p>
              <p className="p_Pprice">Price</p>
              <p className="p_Qty">Quantity</p>
              <p className="p_Subtot">Subtotal</p>
            </div>
          <div className="cart_Summary">
           

            <div className="items_Cart">
              {cart.map((item) => (
                <div key={item.id} className="rowcart_Details">
                  <div className="cart_Productimage">
                    <img src={item.image} alt={item.name} className="image_Cart" />
                  </div>
                  <div className="cart_Productname">
                    <p>{item.name}</p>
                  </div>
                  <div className="cart_Productprice">${item.price}</div>
                  <div className="cart_Productqty">{item.quantity}</div>
                  <div className="cart_Total">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
          </div>

          <div className="cart_Checkout">
            <h2 className="h2_Stickcart">Cart Totals</h2>
            <h3 className="h3_Stickcart">
              <span className="span_Stickcart">Total</span> 
              ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
            </h3>
            <Link to='/checkout'>
              <button className="checkout_Btncart">Checkout</button>
            </Link>
          </div>
        </div>
      </div>

      <Warranty />
    </div>
  );
};

export default Cart;
