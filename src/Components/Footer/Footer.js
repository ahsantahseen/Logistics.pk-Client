import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import phone from "../../images/telephone.svg";
import email from "../../images/email.svg";
import {
  FaEnvelope,
  FaBuilding,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import "../../styles/App.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <Container>
        <Row>
          <Col lg="3" md="6" sm="6" xs="12">
            <ul className="adress">
              <span>Address</span>
              <li>
                <p>
                  38-E, Unit #2, Shamsi Road, Block-6, P.E.C.H.S،
                  Shahrah-e-Faisal, Block 6 PECHS, Karachi, Karachi City, Sindh
                  75400, Pakistan
                </p>
              </li>
              <li>
                <p>+92 1234 56789</p>
              </li>
              <li>
                <p>info@gmail.com</p>
              </li>
            </ul>
          </Col>
          <Col lg="3" md="6" sm="6" xs="12">
            <ul className="contact">
              <span>Contact</span>
              <li>
                <a>
                  Finance Department <br />
                  <FaEnvelope /> support.fin@lpk.pk <br />
                  <FaPhone /> +92 313 4352
                </a>
              </li>

              <li>
                <a>
                  Techincal Department <br /> <FaEnvelope /> support.tech@lpk.pk{" "}
                  <br />
                  <FaPhone /> +92 313 4351
                </a>
              </li>

              <li>
                <a>
                  Customer Support <br />
                  <FaEnvelope /> support.cs@lpk.pk <br />
                  <FaPhone /> +92 313 4353
                </a>
              </li>
            </ul>
          </Col>
          <Col lg="3" md="6" sm="6" xs="12">
            <ul className="contact">
              <span>Blogs</span>
              <li>
                <a>Pakistan's First Automated Packaging Plant 1</a>
              </li>

              <li>
                <a>2007 Crisis Management</a>
              </li>

              <li>
                <a>How Logistics.pk become #1</a>
              </li>

              <li>
                <a>Massive Training Facility For IT Support</a>
              </li>

              <li>
                <a>Interview with our founder Mr.Muhammad Ahsan</a>
              </li>
            </ul>
          </Col>
          <Col lg="3" md="6" sm="6" xs="12">
            <ul className="social">
              <span>Social</span>
              <li>
                <a>
                  <i className="fa fa-github fa-2x">
                    <FaTwitter></FaTwitter> Twitter
                  </i>
                </a>
              </li>
              <li>
                <a>
                  <i className="fa fa-linkedin fa-2x">
                    <FaLinkedinIn></FaLinkedinIn> LinkedIn
                  </i>
                </a>
              </li>

              <li>
                <a>
                  <i className="">
                    <FaFacebook></FaFacebook> Facebook
                  </i>
                </a>
              </li>

              <li>
                <a>
                  <i className="">
                    <FaInstagram></FaInstagram> Instagram
                  </i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
