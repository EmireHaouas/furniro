import React from "react";
import { useParams } from "react-router-dom";
import './cart.css';
import bannercart from '../../assets/imgs/bannercart.png';


const Cart = () => {
    return(
        <div>
            <img className="banner_Cart" src={bannercart} alt="bannercart" />
 
            <h1>Cart Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quis ab dolores distinctio,
                 ex earum quisquam quibusdam, quaerat id totam aut autem mollitia? Dolores, asperiores praesentium consequatur at architecto laudantium?</h1>
        </div>
    );
};
export default Cart;