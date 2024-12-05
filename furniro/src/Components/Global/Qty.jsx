import React from "react";
import "./Qty.css";

const Qty = ({ quantity, setQuantity }) => {

  const increament = () => {
    setQuantity(quantity + 1);    
  }

  const decreament = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="qty">
      <button className="decrease_Qty" onClick={decreament}>-</button>
      <span>{quantity}</span>
      <button className="increase_Qty" onClick={increament}>+</button>
    </div>
  );
};

export default Qty;
