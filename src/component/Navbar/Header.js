import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.png';
import './Header.css'

import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';


class Header extends Component {
    render() {
        return (
          <>
            <Navbar className="color" expand="lg md sm">
  <Navbar.Brand ><div className="logo"> <img src={logo} alt="store" ></img><span id="comp-name">mobishop</span></div></Navbar.Brand>
  <Navbar.Toggle className="controls" aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto"></Nav>
    <Link to="/" className="nav-link">
        Products
       </Link>
    <Link to="/addtocart">
    <Button >
    <i className="fas fa-cart-plus"></i>
    <span className="mr">My Cart</span>
    </Button>
    </Link>
   
  </Navbar.Collapse>
</Navbar>
</>
          
        );
    }
}

export default Header;