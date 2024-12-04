import React from "react";
import './Checkout.css';
import bannercheckout from '../../assets/imgs/bannercheckout.png';

const Checkout = () =>{
    return(
        <div>
            <img src={bannercheckout} alt="bannercheckout" className="bannercheckout"/>
            <h1>Checkout</h1>
        </div>
    );
};

export default Checkout;