import React, { Component } from 'react';

import styled from 'styled-components';

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

class AfterLogin extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <StyledNav>
          <StyledLogo>LandTick</StyledLogo>
          <img
            src={require('../assets/man.svg')}
            alt=''
            // onClick={this.state.handleDropdownShow}
          />
        </StyledNav>
      </div>
    );
  }
}

export default AfterLogin;
