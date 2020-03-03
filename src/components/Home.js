import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StyledNav = styled.div`
  position: absolute;
  width: 100%;
  height: 45px;
  top: 0px;
  background: #ffffff;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
`;

const StyledLogo = styled.h1`
  font-weight: 9;
  font-size: 20px;
  color: black;
  font-style: italic;
`;

const LoginButton = styled.button`
  background: linear-gradient(90deg, #ec7ab7 -0.6%, #ec7a7a 100%);
  border-radius: 5px;
  color: #fff;
  padding: 10px 40px;
  transition: 0.2s;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  &:hover {
    background: hsla(138, 48%, 71%, 1);
  }
  outline: none !important;
  height: 41px;
`;

const RegisterButton = styled.button`
  border-radius: 5px;
  background: #fff;
  color: #000;
  padding: 10px 40px;
  transition: 0.2s;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #6dcc84;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    background: hsla(138, 48%, 61%, 1);
    color: #fff;
  }
  outline: none !important;
  height: 41px;
`;

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: linear-gradient(180deg, #ec7a7a 0%, #ec7ab7 100%);
`;

const Jumbotron = styled.div`
  width: 100%;
  height: 280px;
  color: white;
  background: linear-gradient(90deg, #ec7ab7 14%, #ec7a7a 100%);
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.25);
`;

const JumbotronText = styled.div`
  margin-left: 250px;
`;

const TicketSchedule = styled.div`
  position: absolute;
  width: 1220px;
  height: 236px;
  left: 250px;
  top: 250px;
  border: 1px solid gray;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const LeftSide = styled.div`
  position: absolute;
  width: 20%;
  height: 100%;
  background: #f2f2f2;
  border-radius: 5px;
`;

const LeftSideInner = styled.div`
  height: 53px;
  background-color: white;
`;

const RightSide = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  border-radius: 5px;
  background-color: yellow;
  margin-left: 244px;
`;

const DewasaBayi = styled.div`
  margin-left: 500px;
  margin-top: -90px;
  display: flex;
  /* flex-direction: column; */
  align-items: flex-start;
`;

const OriginDeparture = styled.div`
  display: flex;
  flex-direction: row;
  &:hover {
    background: hsla(138, 48%, 61%, 1);
    color: #fff;
  }
`;

const AllSchedule = styled.div`
  margin-top: 216px;
  justify-content: space-around;
  margin-left: 250px;
`;

const ScheduleTitle = styled.div`
  display: flex;
  /* column-gap: 8px; */
  justify-content: space-around;
  width: 1220px;
`;

const Train = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-around;
  /* align-content: center; */
  /* justify-content: center; */
  width: 1220px;
  margin-top: 10px;
  /* column-gap: 8px; */
  border: 1px solid #b7b7b7;
  box-sizing: border-box;
  border-radius: 5px;
`;

// ==============================================================================================================

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleLoginHide = () => {
    this.setState({
      modalLogin: false
    });
  };
  handleLoginShow = () => {
    this.setState({
      modalLogin: true
    });
  };
  handleRegisterHide = () => {
    this.setState({
      modalRegister: false
    });
  };
  handleRegisterShow = () => {
    this.setState({
      modalRegister: true
    });
  };

  render() {
    return (
      <div>
        <StyledNav>
          <div>
            <StyledLogo>LandTick</StyledLogo>
          </div>
          <div>
            <RegisterButton onClick={this.handleRegisterShow}>
              Register
            </RegisterButton>
            <LoginButton onClick={this.handleLoginShow}>Login</LoginButton>
          </div>
        </StyledNav>
        {/* ==================================================================== */}
        <Modal show={this.state.modalLogin}>
          <Modal.Header closeButton onClick={this.handleLoginHide}>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <Form onSubmit={this.handleLogin}> */}
            <Form>
              <Form.Group controlId='formBasicEmail'>
                <Form.Control
                  name='Username'
                  type='text'
                  placeholder='Username'
                  // onChange={this.emailOnChange}
                />
                {/* <p>{this.state.emailErr}</p> */}
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Control
                  name='password'
                  type='password'
                  placeholder='Password'
                  // onChange={this.passwordOnChange}
                />
                {/* <p>{this.state.passErr}</p> */}
                {/* {this.state.loginError && <p>{this.state.loginError}</p>} */}
              </Form.Group>
              <Modal.Footer>
                <Link to='/afterlogin'>
                  <LoginButton type='submit'>Login</LoginButton>
                </Link>
                <p>
                  Dont have an account yet? Click <b>here</b>
                </p>
              </Modal.Footer>
            </Form>
          </Modal.Body>

          {/* <StyledButton onClick={this.handleLoginHide}>Close</StyledButton> */}
          {/* <Link to='/Index'> */}
          {/* <StyledButton onClick={this.handleLoginShow}>Masok</StyledButton> */}

          {/* </Link> */}
        </Modal>

        <Modal show={this.state.modalRegister} onHide={this.handleRegisterHide}>
          {/* <Modal show={this.state.modalRegister}> */}
          <Modal.Header closeButton onClick={this.handleRegisterHide}>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <Form onSubmit={this.handleRegister}> */}
            <Form>
              <Form.Group controlId='formBasicText'>
                <Form.Control
                  type='text'
                  placeholder='Full Name'
                  name='fullName'
                  // onChange={this.registerOnChange}
                />
                <br />
                <Form.Control
                  type='Username'
                  placeholder='Username'
                  name='username'
                  // onChange={this.registerOnChange}
                />
                <br />

                <Form.Control
                  type='email'
                  placeholder='Email'
                  name='email'
                  // onChange={this.registerOnChange}
                />
                <br />

                <Form.Control
                  type='password'
                  placeholder='Password'
                  name='password'
                  // onChange={this.registerOnChange}
                />
                <br />
              </Form.Group>
              <Modal.Footer>
                {/* <StyledButton onClick={this.handleLoginHide}>Close</StyledButton> */}
                {/* <StyledButton onClick={this.handleRegisterHide}> */}
                <RegisterButton type='submit'>Register</RegisterButton>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
        {/* ========================================================== */}

        <Jumbotron>
          <JumbotronText>
            <br />
            <br />
            <h1>Good Morning, Ticket Seekers!</h1>
            <h3>Looking for steal deal?</h3>
            <h3>Register or Login rigt now!!</h3>
          </JumbotronText>
        </Jumbotron>
        <TicketSchedule>
          <LeftSide>
            <LeftSideInner>
              <p>Train ticket</p>
            </LeftSideInner>
          </LeftSide>
          <RightSide>
            <h3>Trains</h3>
            <OriginDeparture>
              <p>Origin</p>
              <input
                type='text'
                id=''
                name=''
                placeholder='New York'
                style={{
                  width: '400px',
                  height: '30px',
                  left: '446px',
                  top: '409px',
                  border: '2px solid #B1B1B1',
                  boxSizing: 'border-box',
                  borderRadius: '5px'
                }}
              ></input>
              <p>Departure</p>
              <input
                type='text'
                id=''
                name=''
                placeholder='Boston'
                style={{
                  width: '400px',
                  height: '30px',
                  left: '446px',
                  top: '409px',
                  border: '2px solid #B1B1B1',
                  boxSizing: 'border-box',
                  borderRadius: '5px'
                }}
              ></input>
            </OriginDeparture>
            <div>
              <h4>Date of Departure</h4>
              <input
                type='text'
                id=''
                name=''
                placeholder='DD - MM - YYY'
                style={{
                  width: '138px',
                  height: '30px',
                  left: '446px',
                  top: '409px',
                  border: '2px solid #B1B1B1',
                  boxSizing: 'border-box',
                  borderRadius: '5px'
                }}
              ></input>
              <input type='checkbox' id='' name='' value=''></input>
              Return
            </div>
            <DewasaBayi>
              <h4>Dewasa</h4>
              <input
                type='text'
                id=''
                name=''
                placeholder='DD - MM - YYY'
                style={{
                  width: '138px',
                  height: '30px',
                  left: '446px',
                  top: '409px',
                  border: '2px solid #B1B1B1',
                  boxSizing: 'border-box',
                  borderRadius: '5px'
                }}
              ></input>
              <h4>Bayi</h4>
              <input
                type='text'
                id=''
                name=''
                placeholder='DD - MM - YYY'
                style={{
                  width: '138px',
                  height: '30px',
                  left: '446px',
                  top: '409px',
                  border: '2px solid #B1B1B1',
                  boxSizing: 'border-box',
                  borderRadius: '5px'
                }}
              ></input>
            </DewasaBayi>
          </RightSide>
        </TicketSchedule>

        <AllSchedule>
          <ScheduleTitle>
            <h4>Train Name</h4>
            <h4>Depart</h4>
            <h4>Arrive</h4>
            <h4>Duration</h4>
            <h4>Price per person</h4>
          </ScheduleTitle>
          <Train>
            <p>Argo Wilis</p>
            <p>05.00</p>
            <p>10.05</p>
            <p>5h 05m </p>
            <p>Rp. 250.000</p>
          </Train>
          <Train>
            <p>Argo Wilis</p>
            <p>05.00</p>
            <p>10.05</p>
            <p>5h 05m </p>
            <p>Rp. 250.000</p>
          </Train>
          <Train>
            <p>Argo Wilis</p>
            <p>05.00</p>
            <p>10.05</p>
            <p>5h 05m </p>
            <p>Rp. 250.000</p>
          </Train>
        </AllSchedule>

        <StyledFooter></StyledFooter>
      </div>
    );
  }
}

export default Home;
