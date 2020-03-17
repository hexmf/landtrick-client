import React, { Component } from 'react';
import styled from 'styled-components';
import './TicketDetail.css';

const StyledContainer = styled.div`
  font-family: 'MuseoSans_500';
`;

class TicketDetail extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <StyledContainer>
        <span>Ticket Detail</span>
      </StyledContainer>
    );
  }
}

export default TicketDetail;
