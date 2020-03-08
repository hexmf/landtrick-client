import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import './Modallogin.css';

import { connect } from 'react-redux';
// import variable yg ada di dalam action kesini agar bisa di ubah menjadi props
import { userLogin } from '../_actions/userA';

class Modallogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      password: '',
      username: '',
      error: '',
      isAuth: false
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

  handleLoginForm = e => {
    if (e.target.name === 'username') {
      this.setState({ username: e.target.value });
    } else {
      this.setState({ password: e.target.value });
    }
  };

  loginButtonOnPress = () => {
    // console.log(this.props);

    this.props.userLogin({
      username: this.state.username,
      password: this.state.password
    });
  };

  render() {
    return (
      <div>
        <Button
          className='btn-modal'
          variant='outline-danger'
          onClick={this.handleShow}
        >
          Login
        </Button>

        <div>
          <Modal show={this.state.modalShow} onHide={this.handleClose}>
            <div>
              <Modal.Title className='formlogin'>Login</Modal.Title>
              <span className='ModalX' onClick={this.handleClose}>
                &#10060;
              </span>
            </div>
            <div>
              <Form className='form-modal'>
                <Form.Group controlId='formBasicText'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter Username'
                    name='username'
                    onChange={this.handleLoginForm}
                  />
                </Form.Group>
                <Form.Group controlId='formBasicPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Password'
                    name='password'
                    onChange={this.handleLoginForm}
                  />
                </Form.Group>
              </Form>
            </div>
            <nav>
              <div className='Footer-btn'>
                {/* <Button className="Footer" onClick={handleClose}>
                        Login
                        </Button> */}
                {/* <Link to='/AfterLogin'> */}
                <button className='footers' onClick={this.loginButtonOnPress}>
                  Login
                </button>
                {this.state.error && <p>Wrong Email or Password!!!</p>}
                {/* </Link> */}
              </div>
            </nav>
          </Modal>
        </div>
      </div>
    );
  }
}

// merubah state global menjadi props agar bisa di akses di komponen ini
// memanggil initialstate yang ada di reducer
const mapStateToProps = state => ({
  data: state.data
});

// mapping action untuk dijadikan props

export default connect(mapStateToProps, { userLogin })(Modallogin);
