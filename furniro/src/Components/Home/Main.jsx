import React, { useState } from "react";  // Ajouter useState ici
import './Main.css';
import { useInView } from 'react-intersection-observer';
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
                    <div className="slytherine_Product">
                            <img className="syltherine_Img" alt="Syltherine" src={syltherine} />
                            <p className="name_Product">{products[0].name}</p>
                            <p className="details_Product">Stylish cafe chair</p>
                            <p className="price_Product">${products[0].price}</p>
                            <div className="quick_Add">
                                <button
                                    className="quickadd_Cart"
                                    onClick={() => handleAddToCart(products[0])}  // Ajout rapide de Syltherine
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="leviosa_Product">
                            <img className="leviosa_Img" alt="" src={leviosa} />
                            <p className="name_Product">{products[1].name}</p>
                            <p className="details_Product">Stylish cafe chair</p>
                            <p className="price_Product">${products[1].price}</p>
                            <div className="quick_Add">
                            <button
                                    className="quickadd_Cart"
                                    onClick={() => handleAddToCart(products[1])}  // Ajout rapide de Syltherine
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="lolito_Product">
                            <img className="lolito_Img" alt="" src={lolito} />
                            <p className="name_Product">{products[2].name}</p>
                            <p className="details_Product">Luxury big sofa</p>
                            <p className="price_Product">${products[2].price}</p>
                            <div className="quick_Add">
                            <button
                                    className="quickadd_Cart"
                                    onClick={() => handleAddToCart(products[2])}  // Ajout rapide de Syltherine
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="respira_Product">
                            <img className="respira_Img" alt="" src={respira} />
                            <p className="name_Product">{products[3].name}</p>
                            <p className="details_Product">Outdoor bar table and stool</p>
                            <p className="price_Product">${products[3].price}</p>
                            <div className="quick_Add">
                            <button
                                    className="quickadd_Cart"
                                    onClick={() => handleAddToCart(products[3])}  // Ajout rapide de Syltherine
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row2_Products">
                        <div className="zephyr_Product">
                            <img className="zephyr_Img" alt="" src={Zephyr} />
                            <p className="name_Product">{products[4].name}</p>
                            <p className="details_Product">Refined seat</p>
                            <p className="price_Product">${products[4].price}</p>
                            <div className="quick_Add">
                            <button
                                    className="quickadd_Cart"
                                    onClick={() => handleAddToCart(products[4])}  // Ajout rapide de Syltherine
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="astra_Product">
                            <img className="astra_Img" alt="" src={astra} />
                            <p className="name_Product">{products[5].name}</p>
                            <p className="details_Product">Elegant bed</p>
                            <p className="price_Product">${products[5].price}</p>
                            <div className="quick_Add">
                            <button
                                    className="quickadd_Cart"
                                    onClick={() => handleAddToCart(products[5])}  // Ajout rapide de Syltherine
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="pinkgy_Product">
                            <img className="pinkgy_Img" alt="" src={pinkgy} />
                            <p className="name_Product">{products[6].name}</p>
                            <p className="details_Product">Wooden TV stand</p>
                            <p className="price_Product">${products[6].price}</p>
                            <div className="quick_Add">
                            <button
                                    className="quickadd_Cart"
                                    onClick={() => handleAddToCart(products[6])}  // Ajout rapide de Syltherine
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="potty_Product">
                            <img className="potty_Img" alt="" src={potty} />
                            <p className="name_Product">{products[7].name}</p>
                            <p className="details_Product">Minimalist shoe rack</p>
                            <p className="price_Product">${products[7].price}</p>
                            <div className="quick_Add">
                            <button
                                    className="quickadd_Cart"
                                    onClick={() => handleAddToCart(products[7])}  // Ajout rapide de Syltherine
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
                    <div className="slytherine_Product">
                            <img className="syltherine_Img" alt="Syltherine" src={syltherine} />
                            <p className="name_Product">{products[0].name}</p>
                            <p className="details_Product">Stylish cafe chair</p>
                            <p className="price_Product">${products[0].price}</p>
                            <div className="quick_Add">
                                <button
                                    className="quickadd_Cart"
                                    onClick={() => handleAddToCart(products[0])}  // Ajout rapide de Syltherine
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="leviosa_Product">
                            <img className="leviosa_Img" alt="" src={leviosa} />
                            <p className="name_Product">{products[1].name}</p>
                            <p className="details_Product">Stylish cafe chair</p>
                            <p className="price_Product">${products[1].price}</p>
                            <div className="quick_Add">
                            <button
                                    className="quickadd_Cart"
                                    onClick={() => handleAddToCart(products[1])}  // Ajout rapide de Syltherine
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="lolito_Product">
                            <img className="lolito_Img" alt="" src={lolito} />
                            <p className="name_Product">{products[2].name}</p>
                            <p className="details_Product">Luxury big sofa</p>
                            <p className="price_Product">${products[2].price}</p>
                            <div className="quick_Add">
                            <button
                                    className="quickadd_Cart"
                                    onClick={() => handleAddToCart(products[2])}  // Ajout rapide de Syltherine
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="respira_Product">
                            <img className="respira_Img" alt="" src={respira} />
                            <p className="name_Product">{products[3].name}</p>
                            <p className="details_Product">Outdoor bar table and stool</p>
                            <p className="price_Product">${products[3].price}</p>
                            <div className="quick_Add">
                            <button
                                    className="quickadd_Cart"
                                    onClick={() => handleAddToCart(products[3])}  // Ajout rapide de Syltherine
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row2_Products">
                        <div className="zephyr_Product">
                            <img className="zephyr_Img" alt="" src={Zephyr} />
                            <p className="name_Product">{products[4].name}</p>
                            <p className="details_Product">Refined seat</p>
                            <p className="price_Product">${products[4].price}</p>
                            <div className="quick_Add">
                            <button
                                    className="quickadd_Cart"
                                    onClick={() => handleAddToCart(products[4])}  // Ajout rapide de Syltherine
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="astra_Product">
                            <img className="astra_Img" alt="" src={astra} />
                            <p className="name_Product">{products[5].name}</p>
                            <p className="details_Product">Elegant bed</p>
                            <p className="price_Product">${products[5].price}</p>
                            <div className="quick_Add">
                            <button
                                    className="quickadd_Cart"
                                    onClick={() => handleAddToCart(products[5])}  // Ajout rapide de Syltherine
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="pinkgy_Product">
                            <img className="pinkgy_Img" alt="" src={pinkgy} />
                            <p className="name_Product">{products[6].name}</p>
                            <p className="details_Product">Wooden TV stand</p>
                            <p className="price_Product">${products[6].price}</p>
                            <div className="quick_Add">
                            <button
                                    className="quickadd_Cart"
                                    onClick={() => handleAddToCart(products[6])}  // Ajout rapide de Syltherine
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <div className="potty_Product">
                            <img className="potty_Img" alt="" src={potty} />
                            <p className="name_Product">{products[7].name}</p>
                            <p className="details_Product">Minimalist shoe rack</p>
                            <p className="price_Product">${products[7].price}</p>
                            <div className="quick_Add">
                            <button
                                    className="quickadd_Cart"
                                    onClick={() => handleAddToCart(products[7])}  // Ajout rapide de Syltherine
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
