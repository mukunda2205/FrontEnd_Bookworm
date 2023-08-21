import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navgation_01() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid> {/* Use fluid container for full width */}
        <Navbar.Brand href="#home" className="me-3">
          BookWorm
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">eBook</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Music</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Video</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Lending Library</Nav.Link>
            <Nav.Link href="#pricing">MyShelf</Nav.Link>
            <Nav.Link href="#pricing">MyLibrary</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#pricing">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
            <Nav.Link href="#pricing">Feedback</Nav.Link>
            <button className="btn btn-outline-success me-2"  type="button">
              SignIn
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navgation_01;
