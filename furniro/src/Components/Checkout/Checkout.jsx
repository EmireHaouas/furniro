import React from "react";
import "./Checkout.css";
import bannercheckout from "../../assets/imgs/bannercheckout.png";
import Warranty from "../Global/Warranty";
import { useCart } from "../Global/Cartcontext"; // Importer le contexte
import Countries from '../../Data/Countries';

const Checkout = () => {
  const { cart } = useCart(); // Récupérer les produits du panier

  // Vérifie si le panier est vide
  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  return (
    <div className="checkout_Container">
      {/* Bannière */}
      <img
        src={bannercheckout}
        alt="bannercheckout"
        className="bannercheckout"
      />

      {/* Détails de facturation */}
      <h1 className="h1_Checkout">Billing details</h1>
      <div className="checkout_Content">
        {/* Formulaire de facturation */}
        <div className="billing_Details">
          <form>
            <div className="form-row">
              <div className="firstname_Check">
              <p>First Name</p>
              <input className="nameto_Check" type="text" required/>
              </div>
              <div className="lastname_Check">
                <p>Last Name</p>
              <input className="nameto_Check2" type="text"  required/>
              </div>
            </div>
            <div className="companyname_Check">
              <p>Company Name (Optional)</p>
            <input className="data_Check" type="text" />
            </div>
            <div className="country_Check">
            <p>Country / Region</p>
            <select className="data_Check" required>
              <option>Japan</option>
              {Countries.map((country, index) => (
                <option key={index}>{country}</option>
              ))}
            </select>
            </div>
            <div className="streetadress_Check">
              <p>Street Adress</p>
            <input className="data_Check" type="text"  required/>
            </div>
            <div className="city_Check">
              <p>Town / City</p>
            <input  className="data_Check" type="text"  required/>
            </div>
            
            <div className="province_Check">
              <p>Province (Optional)</p>
            <input  className="data_Check" type="text" />
            </div>
            <div className="zipcode_Check">
              <p>ZIP Code</p>
            <input className="data_Check" type="text"  required/>
            </div>
            <div className="phone_Check">
              <p>Phone</p>
            <input className="data_Check" type="text" required/>
            </div>
            <div className="email_Check">
              <p>Email Address</p>
            <input className="data_Check" type="email" required/>
            </div>
            
            <textarea className="textarea_Checkout" placeholder="Additional Information"></textarea>
          </form>
        </div>

        {/* Résumé de la commande */}
        <div className="order_Summary">
          
          <div className="items_Cart">
            <div className="rowcart_Check header">
              <div className="column_Check">
                <p className="p_Checkcolum">Product</p>
              </div>
              <div className="column_Check2">
                <p className="p_Checkcolum2">Subtotal</p>
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
              Credit Card
            </label>
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

     
      <Warranty />
    </div>
  );
};

export default Checkout;
