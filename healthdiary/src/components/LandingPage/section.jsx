import React from 'react'

// import doctorsImg from '../../resources/imgaes/doctorsList.svg'
import './styles/landingPageStyle.css'

function Section({heading,paragraph,image}) {
    return (
        <div className='section'>
            <div className='section-img'>
              <img src={image} alt="doctorsList" className="img-svg"></img> 
            </div>
            <div className='section-info'>
                <h3>{heading}</h3>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}

export default Section
