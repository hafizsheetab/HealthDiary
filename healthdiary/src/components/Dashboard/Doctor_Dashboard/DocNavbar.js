import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { FaBell } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';

function DocNavbar() {
  const [sidebar, setSidebar] = useState(true);
  const handleClick = (e) => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
  }

  // const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='_navbar'> 
          <Link to='/doctor/dashboard' className="nav-items">
            <AiFillHome/>
          </Link> 
          <Link to='/' className="nav-items">
            <FaBell />
          </Link>
          <Link to='/' className="nav-items">
            <BiLogOut onClick = {handleClick}/>
          </Link>
        </div>
        
       
      </IconContext.Provider>
    </>
  );
}

export default DocNavbar;