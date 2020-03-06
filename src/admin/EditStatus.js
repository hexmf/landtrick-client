import React, { Component, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import IndexAdmin from "./IndexAdmin";
import "./EditStatus.css";

function EditStatus() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* <Button variant="primary" >
        Custom Width Modal
      </Button> */}
      <img
        id="pensil"
        onClick={() => setShow(true)}
        src={require("./Img/pensil.PNG")}
      />
      <div>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <div className="pembungkuseditstatus">
            <div className="editstatusheader">
              <img src={require("./Img/landtickbackground.PNG")} />
            </div>
            <div className="silangeditstatus">
              <p onClick={handleClose}>&#10060;</p>
            </div>
            <div className="bodyeditstatus">
              <Form className="form-modal">
                <Form.Group controlId="formBasicBreeder">
                  <Form.Label>
                    <h5>Jumlah Tiket</h5>
                  </Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    placeholder=" Jumlah Tiket"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    <h5>Name</h5>
                  </Form.Label>
                  <Form.Control disabled type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>
                    <h5>Tujuan</h5>
                  </Form.Label>
                  <Form.Control disabled type="email" placeholder="Tujuan" />
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                  <Form.Label>
                    <h5>Bukti Trf</h5>
                  </Form.Label>
                  <Form.Control disabled type="text" placeholder="Bukti Trf" />
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                  <Form.Label>
                    <h5>Status</h5>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Status" />
                </Form.Group>
                <button className="btn-edutstatus">Save</button>
              </Form>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default EditStatus;
