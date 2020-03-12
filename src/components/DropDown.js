import React from 'react';
import styled from 'styled-components';
import profile from '../admin/Img/orang.PNG';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  display: flex;
  position: absolute;

  flex: 1;
  top: 0px;
  right: 76px;
`;

const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  cursor: pointer;
`;

const DropdownContent = styled.div`
  /* display: ${props => props.isShow}; */
  position: relative;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none'
    };
  }
  showMenu = () => {
    if (this.state.display === 'none') {
      this.setState({
        display: 'block'
      });
    } else {
      this.setState({
        display: 'none'
      });
    }
  };

  render() {
    return (
      <Container>
        <span>{this.props.datauser.username}</span>
        <ProfileImage src={profile} alt='profile' onClick={this.showMenu} />
        {/* <DropdownContent isShow={}> */}
        <span style={{ display: `${this.state.display}` }}>
          <DropdownContent>
            <div>
              <Link to='/ticket'>Tiket Saya</Link>
            </div>
            <div>
              <Link to='/payment'>Payment</Link>
            </div>

            <div>
              <Link to='/'>Logout</Link>
            </div>
          </DropdownContent>
        </span>
      </Container>
    );
  }
}
