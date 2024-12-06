// Cart.jsx
import React from "react";
import { useCart } from "../Global/Cartcontext"; // Importer le contexte
import './cart.css';
import bannercart from '../../assets/imgs/bannercart.png';
import Warranty from '../Global/Warranty';
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart(); // Récupérer les produits du panier

  // Vérifie si le panier est vide
  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div>
      <img className="banner_Cart" src={bannercart} alt="bannercart" />
      
      <div className="shoppingcart_Check">
        <div className="entire_Cart">
      <div className="testtt">
      <div className="row_Summary">
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Subtotal</p>
      </div>

       <div className="items_Cart">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            
             
          
            
            <div className="rowcart_Details">
            <img src={item.image} alt={item.name} className="image_Cart" />
              <h3 className="cart_Productname">{item.name}</h3>
              <p className="cart_Productprice"> ${item.price}</p>
              <p className="cart_Productqty">{item.quantity}</p>
              <p className="cart_Total">${item.price * item.quantity}</p>
            </div>
            

          </div>
        ))}
      </div>
      </div>

      {/* Afficher le total du panier */}
      <div className="cart_Checkout">
        <h2 className="h2_Stickcart">Cart Totals</h2>
        <h3 className="h3_Stickcart"><span className="span_Stickcart">Total</span> ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>
        <Link to='/checkout'> <button className="checkout_Btncart">Checkout</button></Link>
      </div>
      </div>
      </div>
      <Warranty />
    </div>
  );
};

export default Cart;
