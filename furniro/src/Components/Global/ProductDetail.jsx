import React from "react";
import { useParams } from "react-router-dom";
import products from '../../Data/Product'; // Assurez-vous que le fichier exporte 'products'
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams(); // Récupère l'ID depuis les paramètres de l'URL
  const product = products.find((p) => p.id === parseInt(id)); // Recherche du produit correspondant

  if (!product) {
    return <h2>Product not found</h2>; // Message si le produit n'existe pas
  }

  return (
    <div className="cart_Product">
      <img className="img_Product" src={product.image} alt={product.name} />
      
      <div className="detailsproduct_Details">
         <h1 className="nameproduct_Details">{product.name}</h1>
         <p className="priceproduct_Details"> ${product.price}</p>
         <p className="descriptionproduct_Details" >{product.description}</p>
           <button className="addtocart_Details" onClick={() => addToCart(product)}>
    Add to Cart
</button>

      </div>

    </div>
        
  );
};

export default ProductDetail;
