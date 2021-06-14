import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../Components/Header/NavBar";
import Landing from "../Components/Landing/Landing";
import AboutUs from "../Components/About Us/aboutUs";
import Footer from "../Components/Footer/Footer";
import Order from "../Components/Order/Order";
import OrderStatus from "../Components/OrderStatus/OrderStaus";

function App() {
  return (
    <Container fluid className="bg-dark min-vh-100">
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mt-md-4">
            <Landing />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <AboutUs></AboutUs>
        </Col>
      </Row>
      <Row>
        <Col>
          <center>
            <Order></Order>
          </center>
        </Col>
      </Row>
      <Row>
        <Col>
          <center>
            <OrderStatus></OrderStatus>
          </center>
        </Col>
      </Row>
      <Row>
        <Col>
          <center>
            <Footer></Footer>
          </center>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
