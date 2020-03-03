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

const Ticket = styled.div`
  position: absolute;
  width: 1035px;
  height: 344px;
  left: 232px;
  top: 210px;

  border: 1px solid #b7b7b7;
  box-sizing: border-box;
  border-radius: 5px;
`;

const LogoTicket = styled.div`
  width: 186px;
  height: 34.31px;
  left: 232px;
  top: 209.9px;
  color: white;

  background: linear-gradient(180deg, #ec7a7a 0%, #ec7ab7 100%);
  border-radius: 5px;
  border-bottom-right-radius: 79px;
  /* cornerRadius: 5px; */
`;

const TrainName = styled.div`
  width: 118px;
  height: 33px;
  left: 267px;
  top: 276px;
`;

class MyTicket extends Component {
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
        <h3>My Ticket</h3>
        <Ticket>
          <LogoTicket>LandTick</LogoTicket>
          <TrainName>Argo Bromo</TrainName>
        </Ticket>
      </div>
    );
  }
}

export default MyTicket;
