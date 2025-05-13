import { useNavigate } from "react-router-dom";
import "./Shop.css";
import bannershop_Img from "../../assets/imgs/bannershop_Img.webp";
import Warranty from "../Global/Warranty";
const Shop = () => {
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div>
            <img className="bannerimg_Shop" alt="banner img" src={bannershop_Img} />
            <section className="product_Page">
                <div className="row1_Shop">
                    <div className="cart_Product1" onClick={() => handleProductClick(1)}>
                        <div className="imgproduct_01"></div>

                        <div className="details_Product1">
                            <p className="product1_Name">Syltherine</p>
                            <p className="product1_Description">Stylish cafe chair</p>
                            <p className="product1_Price">$200</p>
                        </div>
                    </div>

                    <div className="cart_Product2" onClick={() => handleProductClick(2)}>
                        <div className="imgproduct_02"></div>
                        <div className="details_Product1">
                            <p className="product2_Name">Leviosa</p>
                            <p className="product2_Description">Stylish cafe chair</p>
                            <p className="product2_Price">$150</p>
                        </div>
                    </div>

                    <div className="cart_Product3" onClick={() => handleProductClick(3)}>
                        <div className="imgproduct_03"></div>
                        <div className="details_Product3">
                            <p className="product3_Name">Lolito</p>
                            <p className="product3_Description">Luxury big sofa</p>
                            <p className="product3_Price">$120</p>
                        </div>
                    </div>

                    <div className="cart_Product4" onClick={() => handleProductClick(4)}>
                        <div className="imgproduct_04"></div>
                        <div className="details_Product4">
                            <p className="product4_Name">Respira</p>
                            <p className="product4_Description">
                                Outdoor bar table and stool
                            </p>
                            <p className="product4_Price">$600</p>
                        </div>
                    </div>
                </div>

                <div className="row2_Shop">
                    <div className="cart_Product1" onClick={() => handleProductClick(5)}>
                        <div className="imgproduct_05"></div>

                        <div className="details_Product1">
                            <p className="product1_Name">Zephyr</p>
                            <p className="product1_Description">Refined seat</p>
                            <p className="product1_Price">$380</p>
                        </div>
                    </div>

                    <div className="cart_Product2" onClick={() => handleProductClick(6)}>
                        <div className="imgproduct_06"></div>
                        <div className="details_Product2">
                            <p className="product2_Name">Astra</p>
                            <p className="product2_Description">Stylish cafe chair</p>
                            <p className="product2_Price">$489</p>
                        </div>
                    </div>

                    <div className="cart_Product3" onClick={() => handleProductClick(7)}>
                        <div className="imgproduct_07"></div>
                        <div className="details_Product3">
                            <p className="product3_Name">Pinkgy</p>
                            <p className="product3_Description">Wooden TV stand</p>
                            <p className="product3_Price">$179</p>
                        </div>
                    </div>

                    <div className="cart_Product4" onClick={() => handleProductClick(8)}>
                        <div className="imgproduct_08"></div>
                        <div className="details_Product4">
                            <p className="product4_Name">Potty</p>
                            <p className="product4_Description">Minimalist shoe rack</p>
                            <p className="product4_Price">$99</p>
                        </div>
                    </div>
                </div>
                <div className="row3_Shop">
                    <div className="cart_Product1" onClick={() => handleProductClick(9)}>
                        <div className="imgproduct_09"></div>

                        <div className="details_Product1">
                            <p className="product1_Name">Velloria</p>
                            <p className="product1_Description">Luxurious armchair</p>
                            <p className="product1_Price">$299</p>
                        </div>
                    </div>

                    <div className="cart_Product2" onClick={() => handleProductClick(10)}>
                        <div className="imgproduct_10"></div>
                        <div className="details_Product2">
                            <p className="product2_Name">Lunara</p>
                            <p className="product2_Description">Elegant dining table</p>
                            <p className="product2_Price">$399</p>
                        </div>
                    </div>

                    <div className="cart_Product3" onClick={() => handleProductClick(11)}>
                        <div className="imgproduct_11"></div>
                        <div className="details_Product3">
                            <p className="product3_Name">Tessera</p>
                            <p className="product3_Description">Luxury big sofa</p>
                            <p className="product3_Price">$499</p>
                        </div>
                    </div>

                    <div className="cart_Product4" onClick={() => handleProductClick(12)}>
                        <div className="imgproduct_12"></div>
                        <div className="details_Product4">
                            <p className="product4_Name">Nyvora</p>
                            <p className="product4_Description">Elegant bedside table</p>
                            <p className="product4_Price">$180</p>
                        </div>
                    </div>
                </div>
                <div className="row4_Shop">
                    <div className="cart_Product1" onClick={() => handleProductClick(13)}>
                        <div className="imgproduct_13"></div>

                        <div className="details_Product1">
                            <p className="product1_Name">Aqualis</p>
                            <p className="product1_Description">
                                Sleek bathroom storage cabinet
                            </p>
                            <p className="product1_Price">$250</p>
                        </div>
                    </div>

                    <div className="cart_Product2" onClick={() => handleProductClick(14)}>
                        <div className="imgproduct_14"></div>
                        <div className="details_Product2">
                            <p className="product2_Name">Orlina</p>
                            <p className="product2_Description">Elegant wooden dresser</p>
                            <p className="product2_Price">$390</p>
                        </div>
                    </div>

                    <div className="cart_Product3" onClick={() => handleProductClick(15)}>
                        <div className="imgproduct_15"></div>
                        <div className="details_Product3">
                            <p className="product3_Name">Mirella</p>
                            <p className="product3_Description">Chic modular dressing unit</p>
                            <p className="product3_Price">$1100</p>
                        </div>
                    </div>

                    <div className="cart_Product4" onClick={() => handleProductClick(16)}>
                        <div className="imgproduct_16"></div>
                        <div className="details_Product4">
                            <p className="product4_Name">Elira</p>
                            <p className="product4_Description">Modern swivel lounge chair</p>
                            <p className="product4_Price">$280</p>
                        </div>
                    </div>
                </div>
            </section>
            <Warranty />
        </div>
    );
};
export default Shop;
