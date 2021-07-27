import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <div>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?cs=srgb&dl=pexels-negative-space-97077.jpg&fm=jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
