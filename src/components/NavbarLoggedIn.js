import React, { Component } from 'react';
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

// const UserLoggedIn = styled.div`
//   float: right;
//   margin-right: 29px;
//   margin-top: 11px;
//   color: #ec7ab7;
//   font-size: 40px;
// `;

const UserLoggedIn = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  width: 80px;
  margin-left: 1400px;
  margin-bottom: 10px;
  margin-top: -50px;
`;

class NavbarLoggedIn extends Component {
  render() {
    return (
      <StyledContainer>
        <Navs>
          <Logo>
            <span>Land Tick</span>
          </Logo>
          <UserLoggedIn>
            <img src={require('../user/Image/orang.PNG')} alt='' />
            <div>
              <span>Jae</span>
            </div>
          </UserLoggedIn>

          {/* <button className="btn-daftar">Login</button> */}
        </Navs>
      </StyledContainer>
    );
  }
}

export default NavbarLoggedIn;
