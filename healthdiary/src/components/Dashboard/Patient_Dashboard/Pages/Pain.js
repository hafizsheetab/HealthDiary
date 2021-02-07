import React from 'react';
import humanBody from '../../../../resources/imgaes/humanbody.png';
import painScale from '../../../../resources/imgaes/painScale.png';
import '../../style/patientDashboardStyle.css';

function Pain() {
    return (  
    <div className='marginOut'>
    <h4 className="pain_heading">Pain in Human Body</h4>
    <div className="pain_img">
      <img src={humanBody} alt='human'/>
      <img src={painScale} alt='pain' />
    </div>
    </div>
  );
}

export default Pain;