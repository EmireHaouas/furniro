import React, { useState } from "react";  // Ajouter useState ici
import './Main.css';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from "react-router-dom";
import background_banner from '../../assets/imgs/background_banner.png';
import bedroom from '../../assets/imgs/bedroom.png';
import dining from '../../assets/imgs/dining.png';
import living from '../../assets/imgs/living.png';
import syltherine from '../../assets/imgs/syltherine.png';
import respira from '../../assets/imgs/respira.jpg';
import potty from '../../assets/imgs/potty.jpg';
import pinkgy from '../../assets/imgs/pinkgy.jpg';
import lolito from '../../assets/imgs/lolito.png';
import leviosa from '../../assets/imgs/leviosa.jpg';
import astra from '../../assets/imgs/astra.jpg';
import share_Img from '../../assets/imgs/share_Img.png';
import Zephyr from '../../assets/imgs/Zephyr.jpg';
import velloria from '../../assets/imgs/velloria.jpg';
import lunara from '../../assets/imgs/lunara.jpg';
import tessera from '../../assets/imgs/tessera.jpg';
import nyvora from '../../assets/imgs/nyvora.jpg';
import aqualis from '../../assets/imgs/aqualis.jpg';
import orlina from '../../assets/imgs/orlina.jpg';
import mirella from '../../assets/imgs/mirella.jpg';
import elira from '../../assets/imgs/elira.jpg';
import { Link } from "react-router-dom";
import { useCart } from "../Global/Cartcontext"; 
import products from "../../Data/Product";

const Main = () => {
    const { addToCart } = useCart(); // Utiliser la fonction "addToCart"
    const [showMore, setShowMore] = useState(false);  // État pour contrôler l'affichage de products2


    const product = products;  // On garde tous les produits ici pour les afficher

    // Fonction pour ajouter au panier avec une quantité de 1
    const handleAddToCart = (product) => {
        addToCart(product, 1);  // Ajouter 1 de ce produit au panier
    };
    // Fonction pour basculer l'état de showMore
    const toggleShowMore = () => {
        setShowMore(prevState => !prevState);  // Alterner entre true/false
    };
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        console.log('Product clicked with ID:', id); // Vérifiez dans la console que l'ID est bien passé
        navigate(`/product/${id}`); // Redirige vers la page du produit
      };
   
    const NeonElement = () => {
        const { ref, inView } = useInView({
            triggerOnce: true,  // Trigger effect once
            threshold: 0.5,      // Element must be 50% visible
        });

          
        return (
            <div ref={ref} className={`neon-element ${inView ? 'highlight' : ''}`}>
                <h3 className="h3_Share">#FurniroFurniture</h3>
            </div>
        );
    };

    return (
        <main className="main">
            <section className="banner">
                {/* <img className="banner_Img" alt="Banner img of furnitures" src={background_banner}/> */}
                <div className="stick">
                    <p className="p_Stick">New Arrival</p>
                    <h1 className="h1_Stick">Discover Our<br /> New Collection</h1>
                    <p className="p_Stick2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br />
                        elit tellus, luctus nec ullamcorper mattis.
                        
                    </p>
                    <Link to="/shop">
                    <button className="stick_Button">Buy Now</button>
                    </Link>
                </div>
            </section>

            <section className="browse">
                <div className="title_Browse">
                    <h2 className="h2_Browse">Browse The Range</h2>
                    <p className="p_Browse">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className="imgs">
                    <div className="dining">
                        <img className="dining_Img" alt="" src={dining} />
                        <p className="p_Dining">Dining</p>
                    </div>
                    <div className="living">
                        <img className="living_Img" alt="" src={living} />
                        <p className="p_Living">Living</p>
                    </div>
                    <div className="bedroom">
                        <img className="bedromm_Img" alt="" src={bedroom} />
                        <p className="p_Bedroom">Bedroom</p>
                    </div>
                </div>
            </section>
           
            <section className="our_Products">
                <h2 className="h2_Our">Our products</h2>
                <div className="products">
                    <div className="row1_Products">
                    <div className="slytherine_Product"  onClick={() => handleProductClick(products[0].id)}>
                   
                    
                            <img className="syltherine_Img" alt="Syltherine" src={syltherine}/>
                            <p className="name_Product">{products[0].name}</p>
                            <p className="details_Product">Stylish cafe chair</p>
                            <p className="price_Product">${products[0].price}</p>
                            <div className="quick_Add">
                            <button
                              className="quickadd_Cart"
                              onClick={(e) => {
                              e.stopPropagation(); 
                              handleAddToCart(products[0]);  
                               }}
                              >
                              Add to Cart
                            </button>
                            </div>
                        </div>
                        <div className="leviosa_Product" onClick={() => handleProductClick(products[1].id)}>
                        
                            <img className="leviosa_Img" alt="" src={leviosa} />
                            <p className="name_Product">{products[1].name}</p>
                            <p className="details_Product">Stylish cafe chair</p>
                            <p className="price_Product">${products[1].price}</p>
                            <div className="quick_Add">
                            <button
                              className="quickadd_Cart"
                              onClick={(e) => {
                              e.stopPropagation(); 
                              handleAddToCart(products[1]);  
                               }}
                              >
                              Add to Cart
                            </button>
                            </div>
                        </div>
                        <div className="lolito_Product" onClick={() => handleProductClick(products[2].id)}>
                            <img className="lolito_Img" alt="" src={lolito} />
                            <p className="name_Product">{products[2].name}</p>
                            <p className="details_Product">Luxury big sofa</p>
                            <p className="price_Product">${products[2].price}</p>
                            <div className="quick_Add">
                            <button
                              className="quickadd_Cart"
                              onClick={(e) => {
                              e.stopPropagation(); 
                              handleAddToCart(products[2]);  
                               }}
                              >
                              Add to Cart
                            </button>
                            </div>
                        </div>
                        <div className="respira_Product" onClick={() => handleProductClick(products[3].id)}>
                            <img className="respira_Img" alt="" src={respira} />
                            <p className="name_Product">{products[3].name}</p>
                            <p className="details_Product">Outdoor bar table and stool</p>
                            <p className="price_Product">${products[3].price}</p>
                            <div className="quick_Add">
                            <button
                              className="quickadd_Cart"
                              onClick={(e) => {
                              e.stopPropagation(); 
                              handleAddToCart(products[3]);  
                               }}
                              >
                              Add to Cart
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="row2_Products">
                        <div className="zephyr_Product" onClick={() => handleProductClick(products[4].id)}>
                            <img className="zephyr_Img" alt="" src={Zephyr} />
                            <p className="name_Product">{products[4].name}</p>
                            <p className="details_Product">Refined seat</p>
                            <p className="price_Product">${products[4].price}</p>
                            <div className="quick_Add">
                            <button
                              className="quickadd_Cart"
                              onClick={(e) => {
                              e.stopPropagation(); 
                              handleAddToCart(products[4]);  
                               }}
                              >
                              Add to Cart
                            </button>
                            </div>
                        </div>
                        <div className="astra_Product" onClick={() => handleProductClick(products[5].id)}>
                            <img className="astra_Img" alt="" src={astra} />
                            <p className="name_Product">{products[5].name}</p>
                            <p className="details_Product">Elegant bed</p>
                            <p className="price_Product">${products[5].price}</p>
                            <div className="quick_Add">
                            <button
                              className="quickadd_Cart"
                              onClick={(e) => {
                              e.stopPropagation(); 
                              handleAddToCart(products[5]);  
                               }}
                              >
                              Add to Cart
                            </button>
                            </div>
                        </div>
                        <div className="pinkgy_Product" onClick={() => handleProductClick(products[6].id)}>
                            <img className="pinkgy_Img" alt="" src={pinkgy} />
                            <p className="name_Product">{products[6].name}</p>
                            <p className="details_Product">Wooden TV stand</p>
                            <p className="price_Product">${products[6].price}</p>
                            <div className="quick_Add">
                            <button
                              className="quickadd_Cart"
                              onClick={(e) => {
                              e.stopPropagation(); 
                              handleAddToCart(products[6]);  
                               }}
                              >
                              Add to Cart
                            </button>
                            </div>
                        </div>
                        <div className="potty_Product" onClick={() => handleProductClick(products[7].id)}>
                            <img className="potty_Img" alt="" src={potty} />
                            <p className="name_Product">{products[7].name}</p>
                            <p className="details_Product">Minimalist shoe rack</p>
                            <p className="price_Product">${products[7].price}</p>
                            <div className="quick_Add">
                            <button
                              className="quickadd_Cart"
                              onClick={(e) => {
                              e.stopPropagation(); 
                              handleAddToCart(products[7]);  
                               }}
                              >
                              Add to Cart
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="show_More" onClick={toggleShowMore}>
                    {showMore ? "Show Less" : "Show More"}
                </button>
                {showMore && (
                <div className="products2"> 
                    <div className="row1_Products">
                    <div className="velloria_Product" onClick={() => handleProductClick(products[8].id)}>
                            <img className="syltherine_Img" alt="Syltherine" src={velloria} />
                            <p className="name_Product">{products[8].name}</p>
                            <p className="details_Product">Luxurious armchair</p>
                            <p className="price_Product">${products[8].price}</p>
                            <div className="quick_Add">
                            <button
                              className="quickadd_Cart"
                              onClick={(e) => {
                              e.stopPropagation(); 
                              handleAddToCart(products[8]);  
                               }}
                              >
                              Add to Cart
                            </button>
                            </div>
                        </div>
                        <div className="lunara_Product" onClick={() => handleProductClick(products[9].id)}>
                            <img className="leviosa_Img" alt="" src={lunara} />
                            <p className="name_Product">{products[9].name}</p>
                            <p className="details_Product">Elegant dining table</p>
                            <p className="price_Product">${products[9].price}</p>
                            <div className="quick_Add">
                            <button
                              className="quickadd_Cart"
                              onClick={(e) => {
                              e.stopPropagation(); 
                              handleAddToCart(products[9]);  
                               }}
                              >
                              Add to Cart
                            </button>
                            </div>
                        </div>
                        <div className="tessera_Product" onClick={() => handleProductClick(products[10].id)}>
                            <img className="lolito_Img" alt="" src={tessera} />
                            <p className="name_Product">{products[10].name}</p>
                            <p className="details_Product">Luxury big sofa</p>
                            <p className="price_Product">${products[10].price}</p>
                            <div className="quick_Add">
                            <button
                              className="quickadd_Cart"
                              onClick={(e) => {
                              e.stopPropagation(); 
                              handleAddToCart(products[10]);  
                               }}
                              >
                              Add to Cart
                            </button>
                            </div>
                        </div>
                        <div className="nyvora_Product" onClick={() => handleProductClick(products[11].id)}>
                            <img className="respira_Img" alt="" src={nyvora} />
                            <p className="name_Product">{products[11].name}</p>
                            <p className="details_Product">Elegant bedside table</p>
                            <p className="price_Product">${products[11].price}</p>
                            <div className="quick_Add">
                            <button
                              className="quickadd_Cart"
                              onClick={(e) => {
                              e.stopPropagation(); 
                              handleAddToCart(products[11]);  
                               }}
                              >
                              Add to Cart
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="row2_Products">
                        <div className="aqualis_Product" onClick={() => handleProductClick(products[12].id)}>
                            <img className="zephyr_Img" alt="" src={aqualis} />
                            <p className="name_Product">{products[12].name}</p>
                            <p className="details_Product">Sleek bathroom storage cabinet</p>
                            <p className="price_Product">${products[12].price}</p>
                            <div className="quick_Add">
                            <button
                              className="quickadd_Cart"
                              onClick={(e) => {
                              e.stopPropagation(); 
                              handleAddToCart(products[12]);  
                               }}
                              >
                              Add to Cart
                            </button>
                            </div>
                        </div>
                        <div className="orlina_Product" onClick={() => handleProductClick(products[13].id)}>
                            <img className="astra_Img" alt="" src={orlina} />
                            <p className="name_Product">{products[13].name}</p>
                            <p className="details_Product">Elegant wooden dresser</p>
                            <p className="price_Product">${products[13].price}</p>
                            <div className="quick_Add">
                            <button
                              className="quickadd_Cart"
                              onClick={(e) => {
                              e.stopPropagation(); 
                              handleAddToCart(products[13]);  
                               }}
                              >
                              Add to Cart
                            </button>
                            </div>
                        </div>
                        <div className="mirella_Product" onClick={() => handleProductClick(products[14].id)}>
                            <img className="pinkgy_Img" alt="" src={mirella} />
                            <p className="name_Product">{products[14].name}</p>
                            <p className="details_Product">Chic modular dressing unit</p>
                            <p className="price_Product">${products[14].price}</p>
                            <div className="quick_Add">
                            <button
                              className="quickadd_Cart"
                              onClick={(e) => {
                              e.stopPropagation(); 
                              handleAddToCart(products[14]);  
                               }}
                              >
                              Add to Cart
                            </button>
                            </div>
                        </div>
                        <div className="elira_Product" onClick={() => handleProductClick(products[15].id)}>
                            <img className="potty_Img" alt="" src={elira} />
                            <p className="name_Product">{products[15].name}</p>
                            <p className="details_Product">Modern swivel lounge chair</p>
                            <p className="price_Product">${products[15].price}</p>
                            <div className="quick_Add">
                            <button
                              className="quickadd_Cart"
                              onClick={(e) => {
                              e.stopPropagation(); 
                              handleAddToCart(products[15]);  
                               }}
                              >
                              Add to Cart
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                  )}
            </section>

            <section className="share">
                <h2 className="h2_Share">Share your setup with</h2>
                {/* Use the NeonElement here */}
                <NeonElement />
                <img className="share_img" alt="img of furniture" src={share_Img} />
            </section>
        </main>
    );
};

export default Main;
