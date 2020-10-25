import React from 'react'
import { Navbar as NavBar, Nav } from 'react-bootstrap'
import './styles/landingPageStyle.css'

function Navbar() {
    return (
        <>
          <NavBar className="navbar">
            <NavBar.Brand href="#home">HealthDiary</NavBar.Brand>
            <Nav className="navitems">
                <Nav.Link className="navitem" href="">Home</Nav.Link>
                <Nav.Link className="navitem" href="">Find a doctor</Nav.Link>
                <Nav.Link className="navitem" href="">Blog</Nav.Link>
                <Nav.Link className="navitem" href="">Self test</Nav.Link>
            </Nav>
        
           <button className="button btn-login">Login</button>
           <button className="button btn-signup">Sign up</button>
            
         </NavBar> 
        </>
    )
}

export default Navbar;
