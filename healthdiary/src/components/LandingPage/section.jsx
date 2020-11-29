import React, { Component } from 'react';
import './styles/landingPageStyle.css';


class Section extends Component {
    render() {
        const { heading, paragraph, image,varient } = this.props;
        let sectionClass = varient === 'primary' ? 'section' : 'section section-rev'     
        
        return (
            <div>
              <div className={sectionClass}>
                <div className='section-img'>
                  <img src={image} alt="doctorsList" className="img-svg"></img> 
                </div>
                <div className='section-info'>
                  <h3>{heading}</h3>
                  <p>{paragraph}</p>
               </div>
              </div>
            </div>
        )
    }
}

export default Section
