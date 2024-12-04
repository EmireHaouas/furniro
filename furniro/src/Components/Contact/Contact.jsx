import React from "react";
import './Contact.css';
import Warranty from "../Global/Warranty";
import vector_Icon from '../../assets/imgs/vector_Icon.png';
import phone_Icon from '../../assets/imgs/phone_Icon.png';
import clock_Icon from '../../assets/imgs/clock_Icon.png';
import bannercontact from '../../assets/imgs/bannercontact.png';
const Contact=() =>{
     return(
        <div>
            <img src={bannercontact} className="banner_Contact" alt="" />
            <div className="intro_Contact">
            <h1 className="title_Contact">Get In Touch With US</h1>
            <p className="p_Contact">For More Information About Our Product & Services. Please Feel Free To Drop Us<br></br>
                 An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                 </div>
                    <div className="map_Contact">
            <div className="infos">
                <div className="sub_Info">
                    <div className="icon_Row">
                        <img src={vector_Icon} alt="vector icon" className="infos_Icon"/>
                       
                        <p className='p_Infos'>Address</p>
                    </div>
                    <p className="p2_Infos">236 5th SE Avenue, New<br></br> 
                    York NY10000, United<br>
                    </br> States</p>
                    
                
                </div>
         
            
                <div className="sub_Info">
                    <div className="icon_Row">
                        <img src={phone_Icon} alt="phone icon" className="infos_Icon"/>
                        <p className='p_Infos'>Phone</p>
                    </div>
                    <p className="p2_Infos">Mobile: +(84) 546-6789<br></br>
                    Hotline: +(84) 456-6789</p>
                
            </div>
                <div className="sub_Info">
                    <div className="icon_Row">
                        <img src={clock_Icon} alt="clock icon" className="infos_Icon"/>
                        <p className='p_Infos'>Working Time</p>
                    </div>
                    <p className="p2_Infos">Monday-Friday: 9:00<br></br>
                     - 22:00<br></br>
                    Saturday-Sunday: 9:00<br/> - 21:00</p>
                
            </div>
            </div>
            <div className="form_Contact">
                <form>
                    <div className="form_Row">
                        <div className="form_Group">
                            <label className="label_Form">Your name</label>
                            <input type="text" className="input_Form" placeholder="Enter Your Name" required/>
                        </div>
                        <div className="form_Group">
                            <label className="label_Form">Email address</label>
                            <input type="email" className="input_Form" placeholder="Enter Your Email" required/>
                        </div>
                    </div>
                    <div className="form_Row">
                        <div className="form_Group">
                            <label className="label_Form">Subject</label>
                            <input type="text" className="input_Form" placeholder="Enter Your Subject" required/>
                        </div>
                    </div>
                    <div className="form_Row">
                        <div className="form_Group">
                            <label className="label_Form">Message</label>
                            <textarea className="textarea_Form" placeholder="Enter Your Message"></textarea>
                        </div>
                    </div>
                    <button className="submit_Form">Submit</button>
                </form>
            </div>
            </div>





       <Warranty />
        </div>
     );
};

export default Contact;