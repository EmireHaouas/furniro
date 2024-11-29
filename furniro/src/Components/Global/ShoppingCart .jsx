import React, { useState } from "react"; 
import './Cart.css';
import cart_Icon from'../../assets/imgs/cart_Icon.png';

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
                <button className="close-btn" onClick={toggleCart}>
                    ×
                </button>
                <h3>Shopping Cart</h3>
                <ul>
                    <li>Asgaard Sofa - Rs. 250,000.00</li>
                    <li>Casaliving Wood - Rs. 270,000.00</li>
                </ul>
                <div className="subtotal">Subtotal: Rs. 520,000.00</div>
            </div>
        </div>
    );
};

export default ShoppingCart; 
