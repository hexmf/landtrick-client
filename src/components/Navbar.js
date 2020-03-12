import React, { Component } from 'react';
import { ButtonToolbar } from 'react-bootstrap';
import Modallogin from '../user/Modallogin';
import Register from '../user/Register';
import styled from 'styled-components';
import DropDown from './DropDown';

const StyledContainer = styled.div`
  font-family: 'MuseoSans_500';
  display: flex;
`;

const Navs = styled.div`
  position: fixed;
  width: 100%;
  height: 45px;
  top: 0px;
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.25);
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 6rem;
`;

const Logo = styled.div`
  font-weight: 2;
  /* font-size: 20px; */
  color: black;
  font-style: italic;
`;

const StyledButtons = styled.div`
  margin-left: 650px;
  margin-bottom: 10px;
  margin-top: -26px;
`;

const LeftContainer = styled.div``;

class Navbar extends Component {
  render() {
    const isAuth = false;
    return (
      <StyledContainer>
        <Navs>
          <Logo>
            <p>Land Tick</p>
          </Logo>

          <LeftContainer>
            {/* <button className="btn-daftar">Login</button> */}
            {isAuth ? (
              <DropDown />
            ) : (
              <StyledButtons>
                <ButtonToolbar>
                  <Modallogin isLoggedIn={this.props.isAuth} />
                </ButtonToolbar>
                <ButtonToolbar>
                  <Register />
                </ButtonToolbar>
              </StyledButtons>
            )}
          </LeftContainer>
        </Navs>
      </StyledContainer>
    );
  }
}

export default Navbar;
