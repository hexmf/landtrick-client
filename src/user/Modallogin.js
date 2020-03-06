import React, { Component, useState } from 'react';
import { Modal, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Modallogin.css';

function Modallogin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className='btn-modal'
        variant='outline-danger'
        onClick={handleShow}
      >
        Login
      </Button>

      <div>
        <Modal show={show} onHide={handleClose}>
          <div>
            <Modal.Title className='formlogin'>Login</Modal.Title>
            <p className='ModalX' onClick={handleClose}>
              &#10060;
            </p>
          </div>
          <div>
            <Form className='form-modal'>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
            </Form>
          </div>
          <nav>
            <div className='Footer-btn'>
              {/* <Button className="Footer" onClick={handleClose}>
                        Login
                        </Button> */}
              <Link to='/AfterLogin'>
                <button className='footers'>Login</button>
              </Link>
            </div>
          </nav>
        </Modal>
      </div>
    </>
  );
}

export default Modallogin;
