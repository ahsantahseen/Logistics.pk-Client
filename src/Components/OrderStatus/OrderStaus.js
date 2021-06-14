import React, { useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Form,
  Button,
  ModalTitle,
} from "react-bootstrap";
import "../../styles/App.css";
import ModalComp from "../UI/Modal";
import axios from "../../Api/Api";

const OrderStatus = () => {
  const FormRef = useRef(null);
  const [loading, setloading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [packages, setpackages] = useState([]);
  const [packageID, setpackageID] = useState();
  const [showModal, setshowModal] = useState();
  const handleClose = () => setshowModal(false);
  const handleShow = () => setshowModal(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setloading(true);
    if (packageID) {
      axios
        .get(`/packages/id/${packageID}`)
        .then((res) => {
          if (res.data.data.length > 0) {
            setpackages(res.data.data[0]);
            console.log(res.data.data[0]);
            setshowModal(true);
          } else {
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setloading(false);
  };
  return (
    <Container className="order-form">
      <div className="order-image">
        <Image
          src="https://image.ibb.co/kUagtU/rocket_contact.png"
          alt="rocket-image"
          className="img"
        />
      </div>
      <Form className="form" ref={FormRef} onSubmit={handleSubmit}>
        <h3 className="h3">Check your Package's Status!</h3>
        <Row className="row">
          <Col md={6}>
            <Form.Group
              className="form-group"
              controlId="PackageSearchValidation"
            >
              <Form.Control
                required
                type="number"
                name="txtPkgID"
                placeholder="Package ID *"
                className="form-control"
                value={packageID}
                onChange={(event) => setpackageID(event.currentTarget.value)}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Button
                type="submit"
                name="btnSubmit"
                className="btnContact"
                disabled={loading}
              >
                Check Status!
              </Button>
            </Form.Group>{" "}
          </Col>
        </Row>
      </Form>
      <ModalComp
        show={showModal}
        handleShow={handleShow}
        handleClose={handleClose}
        title="Package Status"
        data={
          <>
            <p>
              <strong>Weight:</strong> {packages.WEIGHT}
            </p>
            <p>
              <strong>Dimensions:</strong> {packages.DIMENSIONS}
            </p>
            <p>
              <strong>Fragile:</strong> {packages.FRAGILE}
            </p>
            <p>
              <strong>Destination:</strong> {packages.DESTINATION}
            </p>
            <p>
              <strong>Status:</strong> {packages.STATUS}
            </p>
          </>
        }
      ></ModalComp>
    </Container>
  );
};

export default OrderStatus;
