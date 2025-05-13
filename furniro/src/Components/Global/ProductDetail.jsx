import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../Global/Cartcontext";
import products from "../../Data/Product";
import "./ProductDetail.css";
import Qty from "./Qty";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
      <div className="cart_Product">
        <img className="img_Product" src={product.image} alt={product.name} />
        <div className="detailsproduct_Details">
          <h1 className="nameproduct_Details">{product.name}</h1>
          <p className="priceproduct_Details"> ${product.price}</p>
          <p className="descriptionproduct_Details">{product.description}</p>
          <div className="buttons">
            <div className="quantity-selector">
              <Qty quantity={quantity} setQuantity={handleQuantityChange} />
            </div>

            <button
                className="addtocart_Details"
                onClick={() => addToCart(product, quantity)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
  );
};

export default ProductDetail;
