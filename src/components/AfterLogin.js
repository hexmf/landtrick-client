import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';

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

  //   handleDropdownHide = () => {
  //     this.setState({
  //       modalDropdown: false
  //     });
  //   };
  //   handleDropdownShow = () => {
  //     this.setState({
  //       modalDropdown: true
  //     });
  //   };

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
          <Modal.Dialog>
            <Modal.Header>
              {/* <Modal.Header closeButton onClick={this.state.handleDropdownHide}> */}
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant='secondary'>Close</Button>
              <Button variant='primary'>Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </StyledNav>
      </div>
    );
  }
}

export default AfterLogin;
