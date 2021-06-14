import React, { useRef, useState } from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
import "../../styles/App.css";
import phoneLogo from "../../images/telephone.svg";
import axios from "../../Api/Api";
import ModalComp from "../UI/Modal";

const Order = () => {
  const FormRef = useRef(null);

  const [showModal, setshowModal] = useState();
  const [loading, setloading] = useState(false);
  const [name, setname] = useState();
  const [phoneNumber, setphoneNumber] = useState();
  const [address, setaddress] = useState();

  const handleClose = () => setshowModal(false);
  const handleShow = () => setshowModal(true);

  const handleReset = () => {
    setname("");
    setphoneNumber("");
    setaddress("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setloading(true);
    axios
      .post("/customer/add", {
        name: name,
        phone_number: phoneNumber,
        address: address,
      })
      .then((res) => {
        setshowModal(true);
      })
      .catch((error) => {
        console.log(error);
      });
    setloading(false);
    handleReset();
  };
  return (
    <Container className="order-form">
      <div className="order-image">
        <Image src={phoneLogo} alt="rocket-image" className="img" />
      </div>
      <Form className="form" ref={FormRef} onSubmit={handleSubmit}>
        <h3 className="h3">Get your orders placed here!</h3>
        <Row className="row">
          <Col md={6}>
            <Form.Group className="form-group">
              <Form.Control
                type="text"
                name="txtName"
                placeholder="Your Name *"
                className="form-control"
                value={name}
                onChange={(event) => setname(event.currentTarget.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="txtPhone"
                placeholder="Your Phone Number *"
                className="form-control"
                value={phoneNumber}
                onChange={(event) => setphoneNumber(event.currentTarget.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Button
                type="submit"
                name="btnSubmit"
                className="btnContact"
                disabled={loading}
              >
                Place Order
              </Button>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Control
                as="textarea"
                placeholder="Your address *"
                rows={3}
                className="form-control"
                value={address}
                onChange={(event) => setaddress(event.currentTarget.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Form>

      <ModalComp
        show={showModal}
        handleShow={handleShow}
        handleClose={handleClose}
        title="Response"
        data={
          <p>
            <strong>Congrats! Your Order has been placed!</strong>
          </p>
        }
      ></ModalComp>
    </Container>
  );
};

export default Order;
