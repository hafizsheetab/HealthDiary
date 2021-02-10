import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';
import { SidebarData } from './SidebarData';

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
        
        <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' /*onClick={showSidebar}*/>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default PatientNavbar;