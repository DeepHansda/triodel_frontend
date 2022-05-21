import {FiPhoneCall,FiLinkedin,FiFacebook,FiInstagram,FiTwitter } from "react-icons/fi";
import './social.css';
import { Link } from "react-router-dom";

function SocialMediaBar() {
    return(
        <div className="social-media-container">
        <li><a href="https://www.linkedin.com/in/trio-del-69574423a/"><p><FiLinkedin/></p></a></li>
        <li><a href="https://m.facebook.com/MKDAtriodel/"><p><FiFacebook/></p></a></li>
        <li><a href="https://www.instagram.com/mkdatriodel/?igshid=YmMyMTA2M2Y="><p><FiInstagram/></p></a></li>
        <li><a href="https://mobile.twitter.com/triodel3"><p><FiTwitter/></p></a></li>
    </div>
    )
}
export default SocialMediaBar;