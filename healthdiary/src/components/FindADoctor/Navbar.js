import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../components/Dashboard/style/patientDashboardStyle.css';

function PatientNavbar() {
  const [sidebar, setSidebar] = useState(true);

  // const showSidebar = () => setSidebar(!sidebar);
  const handleClick = (e) => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='_navbar'> 
          <Link to='/patient/finddoctor' className="nav-items">
            <p>Find Doctors</p>
          </Link>
          <Link to='/patient/dashboard' className="nav-items">
            <AiFillHome/>
          </Link> 
          
            <FaBell />
          
          <Link to='/' className="nav-items">
            <BiLogOut onClick = {handleClick}/>
          </Link>
        </div>
        
       
      </IconContext.Provider>
    </>
  );
}

export default PatientNavbar;