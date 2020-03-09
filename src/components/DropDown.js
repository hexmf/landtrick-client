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
  display: ${props => props.isShow};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  /* display: flex;
  flex-direction: column; */
`;

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }

  handleOnClick = () => {
    console.log(this.state.isShow);

    this.setState({
      isShow: !this.state.isShow
    });
  };

  render() {
    return (
      <Container>
        <span>{this.props.datauser.username}</span>
        <ProfileImage
          src={profile}
          alt='profile'
          onClick={this.handleOnClick}
        />
        <DropdownContent isShow={this.state.isShow ? 'flex' : 'none'}>
          <div>
            <Link to='/asdf'>asdf</Link>
          </div>
          <div>
            <Link to='/asdf'>asdf</Link>
          </div>
        </DropdownContent>
      </Container>
    );
  }
}
