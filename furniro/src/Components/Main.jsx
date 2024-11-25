import React from "react";
import '../Main.css';
import background_banner from '../assets/imgs/background_banner.png';

const Main = () =>{
    return(
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
        
    )
}
export default Main;