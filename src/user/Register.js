import React, { Component, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import Home from './Home';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShoww = () => setShow(true);

  return (
    <>
      <Button
        className='register'
        variant='outline-danger'
        onClick={handleShoww}
      >
        Register
      </Button>

      <div>
        <Modal show={show} onHide={handleClose}>
          <div>
            <Modal.Title className='formlogin'>Resgistrasi</Modal.Title>
            <p className='ModalX' onClick={handleClose}>
              &#10060;
            </p>
          </div>
          <div>
            <Form className='form-modal'>
              <Form.Group controlId='formBasicBreeder'>
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type='text' placeholder='Nama Lengkap' />
              </Form.Group>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' placeholder='Username' />
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Email' />
              </Form.Group>
              <Form.Group controlId='formBasicPhone'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
            </Form>
          </div>
          <div className='Footer-btn'>
            {/* <Button className="Footer" onClick={handleClose}>
                    Login
                    </Button> */}
            <Link to='/AfterLogin'>
              <button className='footers'>Register</button>
            </Link>
          </div>
        </Modal>
      </div>
    </>
  );
}

export default Register;
