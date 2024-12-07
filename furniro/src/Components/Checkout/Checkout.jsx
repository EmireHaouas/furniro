import React from "react";
import "./Checkout.css";
import bannercheckout from "../../assets/imgs/bannercheckout.png";
import Warranty from "../Global/Warranty";
import { useCart } from "../Global/Cartcontext"; // Importer le contexte

const Checkout = () => {
  const { cart } = useCart(); // Récupérer les produits du panier

  // Vérifie si le panier est vide
  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div className="checkout-container">
      {/* Bannière */}
      <img
        src={bannercheckout}
        alt="bannercheckout"
        className="bannercheckout"
      />

      {/* Détails de facturation */}
      <h1>Billing details</h1>
      <div className="checkout-content">
        {/* Formulaire de facturation */}
        <div className="billing-details">
          <form>
            <div className="form-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <input type="text" placeholder="Company Name (Optional)" />
            <select>
              <option>Country / Region</option>
              <option>Sri Lanka</option>
            </select>
            <input type="text" placeholder="Street address" />
            <input type="text" placeholder="Town / City" />
            <select>
              <option>Province</option>
              <option>Western Province</option>
            </select>
            <input type="text" placeholder="ZIP code" />
            <input type="text" placeholder="Phone" />
            <input type="email" placeholder="Email address" />
            <textarea placeholder="Additional Information"></textarea>
          </form>
        </div>

        {/* Résumé de la commande */}
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="items_Cart">
            <div className="rowcart_Check header">
              <div className="column_Check">
                <p>Product</p>
              </div>
              <div className="column_Check2">
                <p>Subtotal</p>
              </div>
            </div>

            {cart.map((item) => (
              <div key={item.id} className="rowcart_Check">
                <div className="column_Check">
                  <h3 className="check_Productname">{item.name}</h3>
                  <p className="check_Productqty">x{item.quantity}</p>
                </div>
                <div className="column_Check2">
                  <p className="check_Productprice">${item.price}</p>
                  <p className="cart_Totdal">${item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Méthodes de paiement */}
          <div className="payment-methods">
            <h3>Payment Methods</h3>
            <label>
              <input type="radio" name="payment" />
              Direct Bank Transfer
            </label>
            <label>
              <input type="radio" name="payment" />
              Cash On Delivery
            </label>
            <button className="place-order">Place Order</button>
          </div>
        </div>
      </div>

      {/* Garantie */}
      <Warranty />
    </div>
  );
};

export default Checkout;
