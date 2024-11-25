import React from "react";
import '../Main.css';
import background_banner from '../assets/imgs/background_banner.png';
import bedroom from '../assets/imgs/bedroom.png';
import dining from '../assets/imgs/dining.png';
import living from '../assets/imgs/living.png';
import syltherine from '../assets/imgs/syltherine.png';
import respira from '../assets/imgs/respira.png';
import potty from '../assets/imgs/potty.png';
import pingky from '../assets/imgs/pingky.png';
import muggo from '../assets/imgs/muggo.png';
import lolito from '../assets/imgs/lolito.png';
import leviosa from '../assets/imgs/leviosa.png';
import grifo from '../assets/imgs/grifo.png';

const Main = () =>{
    return(
        <main className="main">
        <section className="banner">
         {/* <img className="banner_Img" alt="Banner img of furnitures" src={background_banner}/>*/}
          <div className="stick">
            <p className="p_Stick">New Arrival</p>
            <h1 className="h1_Stick">Discover Our<br></br> New Collection</h1>
            <p className="p_Stick2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br></br> 
            elit tellus, luctus nec ullamcorper mattis.</p>
            <button className="stick_Button">Buy Now</button>
          </div>
        </section>
        <section className="browse">
            <div className="title_Browse">
            <h2 className="h2_Browse">Browse The Range</h2>
            <p className="p_Browse" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="imgs">
                <div className="dining">
                <img className="dining_Img" alt="" src={dining}/>
                <p className="p_Dining">Dining</p>
                </div>
                <div className="living">
                <img className="living_Img" alt="" src={living}/>
                <p className="p_Living">Living</p>
                </div>
                <div className="bedroom">
                <img className="bedromm_Img" alt="" src={bedroom}/>
                <p className="p_Bedroom">Bedroom</p>
                </div>
            </div>

        </section>
        <section className="our_Products">
            <h2 className="h2_Our">Our products</h2>
            <div className="products">
                <div className="row1_Products">
                    <div className="slytherine_Product">
                        <img className="syltherine_Img" alt="" src={syltherine}/>
                        <p className="name_Product">Slytherine</p>
                        <p className="details_Product">Stylish cafe chair</p>
                        <p className="price_Product">$100</p>
                   </div>
                   <div className="leviosa_Product">
                        <img className="leviosa_Img" alt="" src={leviosa}/>
                        <p className="name_Product">Leviosa</p>
                        <p className="details_Product">Stylish cafe chair</p>
                        <p className="price_Product">$200</p>
                   </div>
                   <div className="lolito_Product">
                   <img className="lolito_Img" alt="" src={lolito}/>
                        <p className="name_Product">Lolito</p>
                        <p className="details_Product">Luxury big sofa</p>
                        <p className="price_Product">$500</p>
                   </div>
                   <div className="respira_Product">
                        <img className="respira_Img" alt="" src={respira}/>
                        <p className="name_Product">Respira</p>
                        <p className="details_Product">Outdoor bar table and stool</p>
                        <p className="price_Product">$400</p>
                   </div>
                </div>
                <div className="row2_Products">
                    <div className="grifo_Product">
                         <img className="grifo_Img" alt="" src={grifo}/>
                         <p className="name_Product">Grifo</p>
                         <p className="details_Product">Night lamp</p>
                         <p className="price_Product">$60</p>
                    </div>
                    <div className="muggo_Product">
                         <img className="muggo_Img" alt="" src={muggo}/>
                         <p className="name_Product">Muggo</p>
                         <p className="details_Product">Small mug</p>
                         <p className="price_Product">$350</p>
                   </div>
                   <div className="pinkgy_Product">
                         <img className="pinkgy_Img" alt="" src={pingky}/>
                         <p className="name_Product">Pinkgy</p>
                         <p className="details_Product">Cute bed set</p>
                         <p className="price_Product">$272</p>
                   </div>
                   <div className="potty_Product">
                         <img className="potty_Img" alt="" src={potty}/>
                         <p className="name_Product">Potty</p>
                         <p className="details_Product">Minimalist flower pot</p>
                         <p className="price_Product">$80</p>
                  </div>
                </div>
            </div>
            <button className="show_More">Show More</button>
        </section>
        </main>
        
    )
}
export default Main;