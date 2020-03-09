import React, { Component, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import Home from './Home';
import { Link } from 'react-router-dom';
import './Register.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { userRegister } from '../_actions/userA';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      namalengkap: '',
      username: '',
      email: '',
      password: '',
      jeniskelamin: '',
      telp: '',
      alamat: ''
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

  // handleRegisterForm = e => {
  //   namalengkap: this.state.username,

  // };

  handleRegisterForm = e => {
    e.preventDefault();
    this.setState({
      namalengkap: e.target.value,
      username: e.target.value,
      email: e.target.value,
      password: e.target.value,
      jeniskelamin: e.target.value,
      telp: e.target.value,
      alamat: e.target.value
    });
  };

  registerButtonOnPress = () => {
    // console.log(this.props);

    this.props.userRegister({
      namelengkap: this.state.namalengkap,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      jeniskelamin: this.state.jeniskelamin,
      telp: this.state.telp,
      alamat: this.state.alamat
    });
  };

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
                  <Form.Control
                    type='text'
                    placeholder='Nama Lengkap'
                    name='namalengkap'
                    onChange={this.handleRegisterForm}
                  />
                </Form.Group>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Control
                    type='text'
                    placeholder='Username'
                    name='username'
                    onChange={this.handleRegisterForm}
                  />
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                  <Form.Control
                    type='email'
                    placeholder='Email'
                    name='email'
                    onChange={this.handleRegisterForm}
                  />
                </Form.Group>
                <Form.Group controlId='formBasicPhone'>
                  <Form.Control
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={this.handleRegisterForm}
                  />
                </Form.Group>
                <Form.Control
                  as='select'
                  name='jeliskelamin'
                  placeholder='Jenis Kelamin'
                  onChange={this.handleregisterForm}
                >
                  <option value='1'>Male</option>
                  <option value='2'>Female</option>
                </Form.Control>
                <br />
                <Form.Group controlId='formBasicBreeder'>
                  <Form.Control
                    type='text'
                    placeholder='Telp'
                    name='telp'
                    onChange={this.handleRegisterForm}
                  />
                </Form.Group>
                <Form.Group controlId='formBasicBreeder'>
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Alamat'
                    name='alamat'
                    onChange={this.handleRegisterForm}
                  />
                </Form.Group>
              </Form>
            </div>
            <div className='Footer-btn'>
              {/* <Button className="Footer" onClick={handleClose}>
                    Login
                    </Button> */}
              {/* <Link to='/'> */}
              <button className='footers' onClick={this.registerButtonOnPress}>
                Register
              </button>
              {/* </Link> */}
            </div>
          </Modal>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, { userRegister })(Register);
// export default Register;
