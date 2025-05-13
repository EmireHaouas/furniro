import React from "react";

const ProductList = ({ addToCart }) => {
    const products = [
        { id: 1, name: "Asgaard Sofa", price: 250000 },
        { id: 2, name: "Casaliving Wood", price: 270000 },
    ];

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Rs. {product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
