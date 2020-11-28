import React from 'react'
import { FaFacebook,FaWhatsapp,FaTelegram,FaGooglePlusG } from "react-icons/fa";

import './styles/landingPageStyle.css'

function Footer() {
    return (
        <>
         <div className='footer'>
          <div className='footer-links'>
            <div className="content-links">
                <ul>
                    <li>Contact us</li>
                    <li>Privacy</li>
                    <li>FAQs</li>
                    <li>Terms</li>
                </ul>
            </div>
             <div className="social-links">
                    <a href="facebook.com"><FaFacebook /></a>
                    <a href="whatsapp.com"><FaWhatsapp /></a>
                    <a href="telegram.com"><FaTelegram /></a>
                    <a href="googleplus.com"><FaGooglePlusG /></a>         
            </div>
          </div>
            <div className="footer-text">
                <p>Copyright &copy; 2020. All rights reserved to <span>Health Diary</span> Team</p>
            </div>    
         </div>
            
        </>    
    )
}

export default Footer
