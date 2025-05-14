import { useState } from "react";
import "./Checkout.css";
import bannercheckout from "../../assets/imgs/bannercheckout.webp";
import Warranty from "../Global/Warranty";
import { useCart } from "../Global/Cartcontext";
import Countries from "../../Data/Countries";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [formError, setFormError] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = Object.values(formData).every(
      (value) => value.trim() !== ""
  );

  if (cart.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  const totalAmount = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
  );

  const handleProceed = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/payment");
    } else {
      setFormError(true);
    }
  };

  return (
      <div className="checkout_Container">
        {formError && (
            <p className="error-message">Please fill all required fields.</p>
        )}
        <img
            src={bannercheckout}
            alt="bannercheckout"
            className="bannercheckout"
        />

        <div className="checkout_Content">
          <div className="billing_Details">
            <h1 className="h1_Checkout">Billing details</h1>
            <form className="checkout_form" onSubmit={handleProceed}>
              <div className="form-row">
                <div className="firstname_Check">
                  <p>First Name</p>
                  <input
                      className="nameto_Check"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                  />
                </div>
                <div className="lastname_Check">
                  <p>Last Name</p>
                  <input
                      className="nameto_Check2"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                  />
                </div>
              </div>
              <div className="country_Check">
                <p>Country / Region</p>
                <select
                    className="data_Check"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                >
                  <option value="">Select a country</option>
                  {Countries.map((country, index) => (
                      <option key={index}>{country}</option>
                  ))}
                </select>
              </div>
              <div className="streetadress_Check">
                <p>Street Adress</p>
                <input
                    className="data_Check"
                    name="streetAddress"
                    type="text"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    required
                />
              </div>
              <div className="city_Check">
                <p>Town / City</p>
                <input
                    className="data_Check"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                />
              </div>
              <div className="zipcode_Check">
                <p>ZIP Code</p>
                <input
                    className="data_Check"
                    name="zipCode"
                    type="text"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                />
              </div>
              <div className="phone_Check">
                <p>Phone</p>
                <input
                    className="data_Check"
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                />
              </div>
              <div className="email_Check">
                <p>Email Address</p>
                <input
                    className="data_Check"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
              </div>
              <textarea
                  className="textarea_Checkout"
                  placeholder="Additional Information"
              ></textarea>
              <button
                  className="place-order"
                  type="submit"
                  disabled={!isFormValid}
              >
                Proceed to Payment
              </button>
            </form>
          </div>

          <div className="order_Summary">
            <div className="items_Cart">
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
            <div className="ordertotal_Check">
              <h3 className="h3_Totalcheck">Total</h3>
              <p className="totalamount_Check">${totalAmount.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <Warranty />
      </div>
  );
};

export default Checkout;
