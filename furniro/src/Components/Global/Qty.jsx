import React, { useState } from 'react';

import './Qty.css';

const Qty = () => {
    const [qty, setQty] = useState(1);
     const increament = () => {
        setQty(qty + 1);    
    }
    const decreament = () => {
        if (qty > 1) {
            setQty(qty - 1);
        }
    };

    return (
        <div className="qty">
          <button className="decrease_Qty" onClick={decreament}>-</button>
            <span>{qty}</span>
          <button className="increase_Qty" onClick={increament} >+</button>
        </div>
    );
}
export default Qty;








{/* <div className="qty">
            <button onClick={() => setQty(qty - 1)} disabled={qty <= 1}>
                -
            </button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
        </div>*/}