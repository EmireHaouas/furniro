import React from "react";
import './Checkout.css';
import bannercheckout from '../../assets/imgs/bannercheckout.png';
import Warranty from '../Global/Warranty';
import { useCart } from "../Global/Cartcontext"; // Importer le contexte

const Checkout = () =>{
    const { cart } = useCart(); // Récupérer les produits du panier

  // Vérifie si le panier est vide
  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }
    return(
        <div>
            <img src={bannercheckout} alt="bannercheckout" className="bannercheckout"/>
            <h1>Billing details</h1>
            <div className="items_Cart">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            
             
          
            
            <div className="rowcart_Check">
                <div className="column_Check">
                <p className="p_Checkrow">Product</p>
                <div className="row_Check2">
              <h3 className="check_Productname">{item.name}</h3>
              <p className="check_Productqty"> X{item.quantity}</p>
              </div>
              <p>Total</p>
              </div>
           
              <div className="column_Check2">
              <p className="p_checkrow2">Subtotal</p>
              <p className="check_Productprice"> ${item.price}</p>
              <p className="cart_Totdal">${item.price * item.quantity}</p>
              </div>
              
            </div>
            
            <hr></hr>
          </div>
        
        ))}
      </div>
            <Warranty />
        </div>
    );
};

export default Checkout;