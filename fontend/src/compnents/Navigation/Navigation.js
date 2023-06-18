// import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
// import Service from '../Service/Service';
import "./Navigation.css";
const Navigation = () => {
  return (
    <div>
      <Navbar className="Nav_color" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <div className="logo">
              <p className="text-white">BlogDock</p>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto Nav_part">
              <Nav.Link className="Nav_item" href="/#">
                <span style={{ color: "white" }}>Home</span>
              </Nav.Link>
              <Nav.Link className="Nav_item" href="/#3">
                <span style={{ color: "white" }}>Services</span>
              </Nav.Link>
              <Nav.Link className="Nav_item" href="/#2">
                <span style={{ color: "white" }}>Contact</span>
              </Nav.Link>
              <Nav.Link className="Nav_item" href="/#1">
                <span style={{ color: "white" }}>Bannar</span>
              </Nav.Link>
              <Nav.Link className="Nav_item" href="/addService">
                <span style={{ color: "white" }}>Add Blog</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
