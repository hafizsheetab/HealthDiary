import React from 'react';
import { Nav, Navbar as NavBar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './styles/landingPageStyle.css';

function Navbar() {
  const history = useHistory();
  const routeChange = (path) => {
    let route = path;
    history.push(route);
  }
    return (
        <>
          <NavBar className="navbar">
            <NavBar.Brand href="#home">HealthDiary</NavBar.Brand>
            <Nav className="navitems">
                <Nav.Link className="navitem" href="/">Home</Nav.Link>
                <Nav.Link className="navitem" href="">Community</Nav.Link>
                <Nav.Link className="navitem" href="">Blog</Nav.Link>
                <Nav.Link className="navitem" href="">Self test</Nav.Link>
            </Nav>
        
          <button className="button btn-login" onClick={()=>routeChange('./login')}>Login</button>
           <button className="button btn-signup" onClick={()=>routeChange('./signup')}>Sign up</button>
            
         </NavBar> 
        </>
    )
}

export default Navbar;
