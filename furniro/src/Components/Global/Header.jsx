import React from "react";
import './Header.css';
import logo from "../../assets/imgs/logo.png";
import user_Icon from'../../assets/imgs/user_Icon.png';
import cart_Icon from'../../assets/imgs/cart_Icon.png';
import heart_Icon from'../../assets/imgs/heart_Icon.png';
import search_Icon from'../../assets/imgs/search_Icon.png';



const Header = () =>{
    return(
        <header className="header">
            <div className="test">
            <div className="logo_Pack">
                <img className="logo" alt="logo" src={logo}/>
                <p className="logo_Name">Furniro</p>
            </div>
            <nav className="nav_Bar" >
                <a href="" className="home_Nav">Home</a>
                <a href="" className="shop_Nav">Shop</a>
                <a href="" className="about_Nav">About</a>
                <a href="" className="contact_Nav">Contact</a>

            </nav>
            </div>
            <div className="icons_Nav">
                 <img className="icons" src={user_Icon} alt=""  />
                 <img className="icons" src={search_Icon} alt=""  />
                 <img className="icons" src={heart_Icon} alt=""  />
                 <img className="icons" src={cart_Icon} alt=""  />
           </div> 

        </header>
    )
}
export default Header;