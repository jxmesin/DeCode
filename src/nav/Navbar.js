import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../media/decode-logo.jpg';

export default class Navigation extends Component {
  render() {
    return (
      <Navbar className="nav-color" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
          <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top m-2"
              alt="DeCode logo"
          />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="nav-space" id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Explore</Nav.Link>
              <Nav.Link href="#link">Problems</Nav.Link>
              <Nav.Link href="#link">Interview</Nav.Link>
              <Nav.Link href="#link">Forum</Nav.Link>
              <Nav.Link href="#link">Contest</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
