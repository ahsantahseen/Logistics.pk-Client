import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaBox } from "react-icons/all";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="mt-2 mb-2">
          <Navbar.Brand>Logistics.pk</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse>
            <Nav className="me-auto justify-content-end">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>About</Nav.Link>
              <Nav.Link>Order</Nav.Link>
              <Nav.Link>Package Status</Nav.Link>
            </Nav>
            <Nav>
              <Navbar.Text>
                <FaBox style={{ marginRight: "10px", marginBottom: "2px" }} />
                Delivering with care since 1974
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
