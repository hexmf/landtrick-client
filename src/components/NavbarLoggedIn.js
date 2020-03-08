import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Nav,
  Navbar,
  Form,
  NavDropdown,
  FormControl,
  Button
} from 'react-bootstrap';

const StyledContainer = styled.div`
  font-family: 'MuseoSans_500';
`;

const Navs = styled.div`
  position: fixed;
  width: 100%;
  height: 45px;
  top: 0px;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

const Logo = styled.div`
  font-weight: 9;
  font-size: 20px;
  color: black;
  font-style: italic;
`;

// const UserLoggedIn = styled.div`
//   float: right;
//   margin-right: 29px;
//   margin-top: 11px;
//   color: #ec7ab7;
//   font-size: 40px;
// `;

// const UserLoggedIn = styled.div`
//   /* display: flex;
//   flex-wrap: wrap; */
//   width: 80px;
//   margin-left: 1400px;
//   margin-bottom: 10px;
//   margin-top: -50px;
// `;

// MARGIN TOP ILANGIN UNTUK YANG NAVBAR BENERAN

class NavbarLoggedIn extends Component {
  loggedOutOnPress = () => {
    console.log(this.props);
  };

  render() {
    return (
      <StyledContainer>
        <Navbar bg='light' expand='lg'>
          <Navbar.Brand href='#home'>LinkTicket</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <span>Ari</span>
              <img src={require('../user/Image/orang.PNG')} alt='' />
              <NavDropdown title='' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.2'>
                  Ticket Saya
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Payment</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={this.loggedOutOnPress}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline></Form>
          </Navbar.Collapse>
        </Navbar>
      </StyledContainer>
    );
  }
}

export default NavbarLoggedIn;
