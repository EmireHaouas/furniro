import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../Global/Cartcontext"; // Importer le contexte
import products from "../../Data/Product";
import "./ProductDetail.css";
import Qty from "./Qty";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); // Utiliser la fonction "addToCart"
  const [quantity, setQuantity] = useState(1); // Gestion de la quantité

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }
  useEffect(() => {
    window.scrollTo(0, 0);  // Cela scroll toujours en haut de la page
  }, []);  // Ce tableau vide assure que l'effet ne s'exécute qu'une seule fois à l'initialisation du composant

  // Fonction pour mettre à jour la quantité
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
          {/* Sélecteur de quantité avec les props */}
          <div className="quantity-selector">
            <Qty quantity={quantity} setQuantity={handleQuantityChange} />
          </div>
          {/* Bouton "Add to Cart" */}
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
