import React from 'react'

import './styles/landingPageStyle.css'
import heroImage from '../../resources/imgaes/HD_heroImage.svg';

function Header() {
    return (
        <>
         <div className="header">
            <div>
               <h2>A single platform where Health Practitioners can be discovered easily</h2>   
               <button>How it works</button> 
            </div> 
            <div className="img">
               <img src={heroImage} alt="hero" className="hero-img"/>     
            </div>   
         </div>
        </>
    )
}

export default Header
