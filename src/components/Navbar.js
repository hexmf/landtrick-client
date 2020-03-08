import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import Modallogin from '../user/Modallogin';
import Register from '../user/Register';
import styled from 'styled-components';

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

const StyledButtons = styled.div`
  margin-left: 650px;
  margin-bottom: 10px;
  margin-top: -46px;
`;

class Navbar extends Component {
  render() {
    return (
      <StyledContainer>
        <Navs>
          <Logo>
            <span>Land Tick</span>
          </Logo>

          {/* <button className="btn-daftar">Login</button> */}
          <StyledButtons>
            <ButtonToolbar>
              <Modallogin isLoggedIn={this.props.isAuth} />
            </ButtonToolbar>
            <ButtonToolbar>
              <Register />
            </ButtonToolbar>
          </StyledButtons>
        </Navs>
      </StyledContainer>
    );
  }
}

export default Navbar;
