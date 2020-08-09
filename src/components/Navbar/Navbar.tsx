import React from 'react';
import { Link } from 'react-router-dom';
import BootstrapNavbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.scss';

const Navbar: React.FC = () => (
  <BootstrapNavbar expand="md" className="Navbar container-sm">
    <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
      menu
      <img src={require('../../img/drawing.svg')} alt="burger menu icon" />
    </BootstrapNavbar.Toggle>
    <BootstrapNavbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/">Shop</Link>
        <NavDropdown title="Colection" id="basic-nav-dropdown">
          <Link to="/">Men's</Link>
          <Link to="/">Women's</Link>
          <Link to="/">Kid's</Link>
        </NavDropdown>
        <Link to="/">Blog</Link>
        <Link to="/">Contact</Link>
        <NavDropdown title="Pages" id="basic-nav-dropdown">
          <Link to="/">Blog Details</Link>
          <Link to="/">Shoping Cart</Link>
          <Link to="/">Checkout</Link>
          <Link to="/">Faq</Link>
          <Link to="/">Register</Link>
          <Link to="/">Login</Link>
        </NavDropdown>
      </Nav>
    </BootstrapNavbar.Collapse>
  </BootstrapNavbar>
);

export default Navbar;
