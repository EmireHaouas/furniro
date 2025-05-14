import React from "react";
import "./Warranty.css";
import trophy from "../../assets/imgs/trophy.png";
import shipping from "../../assets/imgs/shipping.png";
import guarantee from "../../assets/imgs/guarantee.png";
import customer from "../../assets/imgs/customer.png";

const Warranty = () => {
    return (
        <section className="warranty_Products">
            <div className="quality">
                <img className="trophy_Icon" alt="trophy" src={trophy} />
                <div className="column_Quality">
                    <h3 className="h3_Quality">High Quality</h3>
                    <p className="p_Quality">crafted from top materials</p>
                </div>
            </div>
            <div className="warranty">
                <img className="warranty_Icon" alt="trophy" src={guarantee} />
                <div className="column_Warranty">
                    <h3 className="h3_Warranty">Warranty Protection</h3>
                    <p className="p_Warranty">Over 2 years</p>
                </div>
            </div>
            <div className="shipping">
                <img className="shipping_Icon" alt="trophy" src={shipping} />
                <div className="column_Shipping">
                    <h3 className="h3_Shipping">Free Shipping</h3>
                    <p className="p_Shipping">Order over 150 $</p>
                </div>
            </div>
            <div className="support">
                <img className="support_Icon" alt="trophy" src={customer} />
                <div className="column_Support">
                    <h3 className="h3_Suppport">24 / 7 Support</h3>
                    <p className="p_Support">Dedicated support</p>
                </div>
            </div>
        </section>
    );
};

export default Warranty;
