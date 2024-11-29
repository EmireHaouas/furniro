import React, { useState } from "react"; 
import './Cart.css';
import cart_Icon from'../../assets/imgs/cart_Icon.png';
import close_Icon from '../../assets/imgs/close_Icon.png';

const ShoppingCart = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };
    

    return (
        <div>
           {/* Icône du panier */}
           {!isCartOpen && ( // Afficher uniquement lorsque le panier est fermé
                <div id="cart-icon" onClick={toggleCart} className="shopping-cart-icon">
                    <img src={cart_Icon} alt="Cart Icon" className="cart-icon-image" />
                </div>
            )}

            {/* Overlay pour fermer le panier en cliquant à l'extérieur */}
            {isCartOpen && <div id="overlay" onClick={toggleCart}></div>}


            {/* Barre latérale (panier) */}
            <div id="shopping-cart" className={isCartOpen ? "active" : ""}>
                <div className="row1">
                <button className="close-btn" onClick={toggleCart}>
                    <img src={close_Icon} alt="Close Icon" className="close_icon" />  {/* Icône de fermeture */}
                </button>
                <div className="title_Hr">
                <h3 className="title_Cart">Shopping Cart</h3>
                <hr></hr>
                </div>
                </div>
                <ul>
                    <li>Asgaard Sofa - Rs. 250,000.00</li>
                    <li>Casaliving Wood - Rs. 270,000.00</li>
                </ul>
                <div className="subtotal"><span className="sub_Cart">Subtotal: </span>  <span className="price_Cart">$. 520,000.00</span></div>
                <hr className="hr2"></hr>
                <div className="button_Cart">
                <button className="cart_Button">Cart</button>
                <button className="checkout_Button">Checkout</button>
                </div>
            </div>
            
        </div>
    );
};

export default ShoppingCart; 
