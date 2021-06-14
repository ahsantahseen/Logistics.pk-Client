import React from "react";
import { Carousel, Jumbotron, Image } from "react-bootstrap";
import truck from "../../images/delivery-truck.svg";
import package_box from "../../images/box.svg";
import smsUpdate from "../../images/sms.svg";
import "../../styles/App.css";

const Landing = () => {
  return (
    <Carousel
      variant="dark"
      slide={true}
      nextLabel=""
      nextIcon={null}
      prevIcon={null}
      prevLabel=""
      fade
    >
      <Carousel.Item duration="300">
        <Jumbotron className="bg-dark jumbotron-h">
          <div className="d-flex d-md-none justify-content-center align-items-center min-vh-100">
            <Image
              height="210px"
              className="p-4 bg-dark d-block d-md-none w-100"
              src={truck}
            />
          </div>
          <Image
            height="340px"
            className="bg-dark d-md-block d-none  w-100"
            src={truck}
          />
          <Carousel.Caption>
            <h3>Fast Delivery</h3>
            <p>
              Our professional drivers ensure that your package is delivered to
              the destination in time.
            </p>
          </Carousel.Caption>
        </Jumbotron>
      </Carousel.Item>
      <Carousel.Item duration="300">
        <Jumbotron className="bg-dark jumbotron-h">
          <div className="d-flex d-md-none justify-content-center align-items-center min-vh-100">
            <Image
              height="170px"
              className="p-4 bg-dark d-block d-md-none w-100"
              src={package_box}
            />
          </div>
          <Image
            height="290px"
            className="bg-dark  d-md-block d-none  w-100"
            src={package_box}
          />
          <Carousel.Caption>
            <h3>Professional Packaging</h3>
            <p>
              Our packing facility ensures that your items are perfectly packed
              and ready for shipment.
            </p>
          </Carousel.Caption>
        </Jumbotron>
      </Carousel.Item>
      <Carousel.Item duration="300">
        <Jumbotron className="bg-dark jumbotron-h">
          <div className="d-flex d-md-none justify-content-center align-items-center min-vh-100">
            <Image
              height="200px"
              className="p-4 bg-dark d-block d-md-none w-100"
              src={smsUpdate}
            />
          </div>
          <Image
            height="290px"
            className="bg-dark d-md-block d-none  w-100"
            src={smsUpdate}
          />
          <Carousel.Caption>
            <h3>SMS Updates</h3>
            <p>
              Our support team ensures that you get complete updates via sms
              regarding your packages.
            </p>
          </Carousel.Caption>
        </Jumbotron>
      </Carousel.Item>
    </Carousel>
  );
};

export default Landing;
