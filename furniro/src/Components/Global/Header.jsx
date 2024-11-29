import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import user_Icon from '../../assets/imgs/user_Icon.png';
import heart_Icon from '../../assets/imgs/heart_Icon.png';
import search_Icon from '../../assets/imgs/search_Icon.png';
import ShoppingCart from './ShoppingCart ';

const Header = () => {
    return (
        <header className="header">
            <div className="test">
                <div className="logo_Pack">
                    <img className="logo" alt="logo" src={logo} />
                    <p className="logo_Name">Furniro</p>
                </div>
                <nav className="nav_Bar">
                    <Link to="/" className="home_Nav">Home</Link>
                    <Link to="/shop" className="shop_Nav">Shop</Link>
                    <Link to="/about" className="about_Nav">About</Link>
                    <Link to="/contact" className="contact_Nav">Contact</Link>
                </nav>
            </div>
            <div className="icons_Nav">
                <img className="icons" src={user_Icon} alt="User Icon" />
                <img className="icons" src={search_Icon} alt="Search Icon" />
                <img className="icons" src={heart_Icon} alt="Heart Icon" />
                <ShoppingCart />
            </div>
        </header>
    );
};

export default Header;
