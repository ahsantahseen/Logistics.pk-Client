import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalComp = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.data}</Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComp;
