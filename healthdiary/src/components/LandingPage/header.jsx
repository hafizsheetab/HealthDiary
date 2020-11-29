import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../resources/imgaes/HD_heroImage.svg';
import './styles/landingPageStyle.css';


function Header(props) {
    return (
        <>
         <div className="header">
            <div>
               <h2>A single platform where Health Practitioners can be discovered easily</h2>   
               <Link to='/howitworks' className='header__button btn'>How it works</Link> 
            </div> 
            <div className="img">
               <img src={heroImage} alt="hero" className="hero-img"/>     
            </div>   
         </div>
        </>
    )
}

export default Header
