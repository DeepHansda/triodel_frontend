import React from "react"
import {FiPhoneCall,FiLinkedin,FiFacebook,FiInstagram,FiTwitter } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import {Link} from "react-router-dom"
import './contactbar.css'
function ContactBar(){
    return(
        <div className="contactBar">
            <div className="call-container">
                <li><a href="tel:+919064443033"><p><FiPhoneCall/></p></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=+919064443033"><p><BsWhatsapp/></p></a></li>
            </div>
          
            <div className="social-container">
                <li><a href="https://www.linkedin.com/in/trio-del-69574423a/"><p><FiLinkedin/></p></a></li>
                <li><a href="https://m.facebook.com/MKDAtriodel/"><p><FiFacebook/></p></a></li>
                <li><a href="https://www.instagram.com/mkdatriodel/?igshid=YmMyMTA2M2Y="><p><FiInstagram/></p></a></li>
                <li><a href="https://mobile.twitter.com/triodel3"><p><FiTwitter/></p></a></li>
            </div>
        </div>
    );
}

export default ContactBar;