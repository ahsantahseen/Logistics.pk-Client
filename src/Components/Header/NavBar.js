import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaBox } from "react-icons/all";

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="mt-2 mb-2">
          <Navbar.Brand>
            <h3>Logistics.pk</h3>
          </Navbar.Brand>
          <Navbar.Text>
            <strong>
              <FaBox style={{ marginRight: "10px", marginBottom: "2px" }} />
              Delivering with care since 1974
            </strong>
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
