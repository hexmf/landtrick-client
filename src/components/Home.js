import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrain, faSearch } from '@fortawesome/free-solid-svg-icons';

const StyledContainer = styled.div`
  font-family: 'MuseoSans_500';
`;

const StyledNav = styled.div`
  position: fixed;
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
  background: #43ab4f;
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
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: linear-gradient(180deg, #ec7a7a 0%, #ec7ab7 100%);
`;

const Jumbotron = styled.div`
  width: 100%;
  height: 280px;
  color: white;
  background: linear-gradient(90deg, #0f752e 14%, #e1f7e8 100%);
`;

const JumbotronText = styled.div`
  margin-left: 250px;
`;

const TicketSchedule = styled.div`
  width: 1220px;
  height: 236px;
  top: 250px;
  border: 1px solid gray;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-left: 250px;
  display: flex;
  flex-direction: row;
`;

const LeftTicketSchedule = styled.div`
  width: 20%;
  background-color: #f2f2f2;
`;

const LeftTicketScheduleInner = styled.div`
  margin-top: 35px;
  height: 53px;
  background-color: white;
`;

const RightTicketSchedule = styled.div`
  width: 80%;
`;

const OriginDestionation = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DateDetails = styled.div`
  /* display: flex;
  justify-content: space-between; */
`;

const AgeDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AllSchedule = styled.div`
  /* margin-top: 216px; */
  justify-content: space-around;
  margin-left: 250px;
`;

const ScheduleTitle = styled.div`
  display: flex;
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

const SearchButton = styled.button`
  width: 134px;
  height: 30px;
  background: #43ab4f;
  border-radius: 5px;
  color: white;
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
      <StyledContainer>
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
                {/* <span>{this.state.emailErr}</span> */}
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Control
                  name='password'
                  type='password'
                  placeholder='Password'
                  // onChange={this.passwordOnChange}
                />
                {/* <span>{this.state.passErr}</span> */}
                {/* {this.state.loginError && <span>{this.state.loginError}</span>} */}
              </Form.Group>
              <Modal.Footer>
                <Link to='/afterlogin'>
                  <LoginButton type='submit'>Login</LoginButton>
                </Link>
                <span>
                  Dont have an account yet? Click <b>here</b>
                </span>
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
          <LeftTicketSchedule>
            <LeftTicketScheduleInner>
              {' '}
              <FontAwesomeIcon icon={faTrain} /> Train Ticket
            </LeftTicketScheduleInner>
          </LeftTicketSchedule>
          <RightTicketSchedule>
            <div>Trains</div>
            <OriginDestionation>
              <span>
                <b>Asal</b>
              </span>
              <input
                type='text'
                id=''
                name=''
                placeholder='Jakarta'
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
              <span>
                <b>Tujuan</b>
              </span>
              <input
                type='text'
                id=''
                name=''
                placeholder='Jakarta'
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
            </OriginDestionation>
            <DateDetails>
              <span>
                <b>Tanggal berangkat</b>
              </span>
              <input
                type='text'
                id=''
                name=''
                placeholder='DDMMYYY'
                style={{
                  width: '113px',
                  height: '30px',
                  left: '446px',
                  top: '409px',
                  border: '2px solid #B1B1B1',
                  boxSizing: 'border-box',
                  borderRadius: '5px'
                }}
              ></input>
              <input
                type='checkbox'
                id=''
                name=''
                value=''
                style={{
                  width: '20px',
                  height: '20',
                  left: '692px',
                  top: '465',
                  border: '1px solid #B1B1B1',
                  boxSizing: 'border-box',
                  borderRadius: '5px'
                }}
              />
              <span>
                <b>Return</b>
              </span>
            </DateDetails>

            <AgeDetails>
              <span>
                <b>Dewasa</b>
              </span>
              <select id=''>
                <option value=''>1</option>
                <option value=''>2</option>
              </select>
              <span>
                <b>Bayi</b>
              </span>
              <select id=''>
                <option value=''>1</option>
                <option value=''>2</option>
              </select>
              <SearchButton>
                <FontAwesomeIcon icon={faSearch} />
                Search Ticket
              </SearchButton>
            </AgeDetails>
          </RightTicketSchedule>
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
            <span>Argo Wilis</span>
            <span>05.00</span>
            <span>10.05</span>
            <span>5h 05m </span>
            <span>Rp. 250.000</span>
          </Train>
          <Train>
            <span>Argo Wilis</span>
            <span>05.00</span>
            <span>10.05</span>
            <span>5h 05m </span>
            <span>Rp. 250.000</span>
          </Train>
          <Train>
            <span>Argo Wilis</span>
            <span>05.00</span>
            <span>10.05</span>
            <span>5h 05m </span>
            <span>Rp. 250.000</span>
          </Train>
        </AllSchedule>

        <StyledFooter />
      </StyledContainer>
    );
  }
}

export default Home;
