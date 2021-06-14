import React from "react";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import deliveryMan from "../../images/delivery-man.svg";
import packageHand from "../../images/package.svg";
import "../../styles/App.css";
const AboutUs = () => {
  return (
    <Container fluid style={{ minHeight: "55vh" }}>
      <Row className="mt-md-5 mt-2">
        <Col md={5} className="bg-dark">
          <div className="d-flex justify-content-center align-items-center">
            <Image
              height="200px"
              className="bg-dark d-md-block d-none"
              src={deliveryMan}
            />
            <Image
              height="200px"
              className="bg-dark d-md-block d-none"
              src={packageHand}
            />
          </div>
        </Col>
        <Col md={6} className="bg-dark text-light aboutus">
          <h1 className="heading">About us</h1>
          <p>
            TCS is a Pakistani courier and logistics company which is based in
            Karachi, Pakistan. It was founded by a former Pakistan International
            Airlines flight engineer, Khalid Nawaz Awan, in 1983. The company
            also operates an e-commerce business Yayvo, previously known as TCS
            Connect
          </p>
          <p>
            TCS maintains several thousand locations within Pakistan and
            worldwide as well as its own airline operations, delivery vehicles
            and couriers. TCS has been assigned machine readable passports
            (MRPs) delivery services by the government,[4][5][6] and Visa
            application submission and delivery services by embassies. TCS also
            maintains a business partnership with UPS. You can also track your
            order online.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
