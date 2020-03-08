import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: linear-gradient(180deg, #ec7a7a 0%, #ec7ab7 100%);
  color: white;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <h6>&copy;2020 DumbWays</h6>
    </StyledFooter>
  );
};

export default Footer;
