import React from "react";
import '../Footer.css';

const Footer=() => { 
    return(
        <footer className="footer">
            <div className="columns">
            <div className="column1">
                <p className="name_Column1">Furniro.</p>
                <p className="adress_Column1">400 University Drive Suite 200 Coral<br></br> Gables, FL 33134 USA</p>
            </div>
            <div className="column2">
                <p className="title_Footer">Links</p>
                <a className='home_Footer' href="">Home</a>
                <a className="shop_Footer" href='../Components/Shop'>Shop</a>
                <a className="about_Footer" href="">About</a>
                <a className='contact_Footer' href="">Contact</a>
            </div>
            <div className="column3">
            <p className="title_Footer">Help</p>
            <a className="payment_Footer" href="">Payment Options</a>
            <a className="returns_Footer" href="">Returns</a>
            <a className="privacy_Footer" href="">Privacy Plicies</a>
            </div>
            <div className="columns3">
                <p className="title_Footer">Newsletter</p>
                <p>hdezd</p>
            </div>
            </div>
            <div className="credit_Section">
            <hr className="hr_Footer"></hr>
            <p className="credit">Developed by Emire.H</p>
            </div>
        </footer>

    )
}
export default Footer;