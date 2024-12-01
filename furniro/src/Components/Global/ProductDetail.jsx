import React from "react";
import { useParams } from "react-router-dom";
import products from '../../Data/Product'; // Assurez-vous que le fichier exporte 'products'

const ProductDetail = () => {
  const { id } = useParams(); // Récupère l'ID depuis les paramètres de l'URL
  const product = products.find((p) => p.id === parseInt(id)); // Recherche du produit correspondant

  if (!product) {
    return <h2>Produit introuvable</h2>; // Message si le produit n'existe pas
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Prix: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
