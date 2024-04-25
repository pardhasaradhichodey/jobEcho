// Navbar.js
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { NavLink as RNavLink } from 'react-router-dom';
import logo from './logo.png';
import './navbar.css';
const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/"><img src={logo} alt="Logo" style={{ width:'50px', height: '50px', marginRight: '10px',backgroundColor:'#0077B5',borderRadius:'3px' }} /></NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink className='navilink' to="/" tag={RNavLink}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='navilink' to="/about" tag={RNavLink}>About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='navilink' to="/whatWeDo" tag={RNavLink}>What We Do</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='navilink' to="/demo" tag={RNavLink}>Demo</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='navilink' to="/contact" tag={RNavLink}>Contact Us</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavigationBar;
