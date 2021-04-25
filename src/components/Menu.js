import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';

function Menu() {
    return(
      <>
      <Navbar bg="light" variant="light" className="my-5">
        <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
          <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
          <Nav.Link as={Link} to={'/register'}>Register</Nav.Link>
        </Nav>
      </Navbar>
      </>
    )
  }

export default Menu;