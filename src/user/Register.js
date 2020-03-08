import React, { Component, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import Home from './Home';
import { Link } from 'react-router-dom';
import './Register.css';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false
    };
  }

  handleShow = () => {
    this.setState({
      modalShow: true
    });
  };

  handleClose = () => {
    this.setState({
      modalShow: false
    });
  };

  handleRegisterForm = e => {};

  registerButtononPress = async () => {};

  render() {
    return (
      <>
        <Button
          className='register'
          variant='outline-danger'
          onClick={this.handleShow}
        >
          Register
        </Button>

        <div>
          <Modal show={this.state.modalShow} onHide={this.handleClose}>
            <div>
              <Modal.Title className='formlogin'>Resgistrasi</Modal.Title>
              <p className='ModalX' onClick={this.handleClose}>
                &#10060;
              </p>
            </div>
            <div>
              <Form className='form-modal'>
                <Form.Group controlId='formBasicBreeder'>
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Nama Lengkap'
                    name='namalengkap'
                    onChange={() => {}}
                  />
                </Form.Group>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Username'
                    name='username'
                    onChange={() => {}}
                  />
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Email'
                    name='email'
                    onChange={() => {}}
                  />
                </Form.Group>
                <Form.Group controlId='formBasicPhone'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={() => {}}
                  />
                </Form.Group>
              </Form>
            </div>
            <div className='Footer-btn'>
              {/* <Button className="Footer" onClick={handleClose}>
                    Login
                    </Button> */}
              {/* <Link to='/'> */}
              <button className='footers'>Register</button>
              {/* </Link> */}
            </div>
          </Modal>
        </div>
      </>
    );
  }
}

export default Register;
