import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div className="navbar">
      <Navbar bg="secondary" style={{ minWidth: "100vw" }}>
        <Navbar.Brand href="/">Degre Motorsports</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/schedule">Schedule</Nav.Link>
            <Nav.Link href="/drivers">Drivers</Nav.Link>
            <Nav.Link href="/crew">Crew</Nav.Link>
            <Nav.Link href="/sponsors">Sponsors</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
