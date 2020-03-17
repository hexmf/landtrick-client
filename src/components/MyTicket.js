import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrain } from '@fortawesome/free-solid-svg-icons';
import './MyTicket.css';

const StyledContainer = styled.div`
  font-family: 'MuseoSans_500';
`;

const StyledTicket = styled.div`
  position: absolute;
  width: 1035px;
  height: 344px;
  left: 232px;
  top: 210px;

  border: 1px solid #b7b7b7;
  box-sizing: border-box;
  border-radius: 5px;
`;

const StyledLogo = styled.div`
  width: 186px;
  height: 34.31px;
  left: 232px;
  top: 209.9px;

  background: linear-gradient(180deg, #ec7a7a 0%, #ec7ab7 100%);
  border-radius: 5px;
  color: white;
`;

class MyTicket extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <StyledContainer>
        <h1>My Ticket</h1>

        <StyledTicket>
          <StyledLogo>
            <FontAwesomeIcon icon={faTrain} /> Landtick
          </StyledLogo>

          <div className='keretaapi'>
            <h3>Kereta Api</h3>
            <p>Saturday, 21 Februari 2020</p>
          </div>

          <div className='argowills'>
            <h3>
              <b>Argo Wills</b>
            </h3>
          </div>
          <div className='eksekutif'>
            <p>Eksekutif (H)</p>
          </div>
          <div className='pending'>Pending</div>

          <div className='atas'>
            <div className='jam'>
              <h6>05.00</h6>
              <p>21 Februari 2020</p>
            </div>

            <div className='jam2'>
              <h6>10.05</h6>
              <p>21 Februari 2020</p>
            </div>

            <div className='stasiunasal'>
              <h6>Jakarta(GMR)</h6>
              <p>Stasiun Gambir</p>
            </div>

            <div className='stasiuntujuan'>
              <h6>Surabaya(SBY)</h6>
              <p>Stasiun Surabaya</p>
            </div>
          </div>

          <div className='bawah'>
            <div className='notanda'>
              <p>No. Tanda Pengenal</p>
            </div>
            <div className='namapemesan'>
              <p>Nama Pemesan</p>
            </div>
            <div className='Nohandphone'>
              <p>No.Handphone</p>
            </div>
            <div className='Email'>
              <p>Email</p>
            </div>
            <div className='byn-byr'>
              <button>Bayar Sekarang</button>
            </div>
          </div>

          <div className='bawah2'>
            <div className='notanda'>
              <p>311750333003970001</p>
            </div>
            <div className='namapemesan'>
              <p>Anto</p>
            </div>
            <div className='Nohandphone'>
              <p>085297181217</p>
            </div>
            <div className='Email'>
              <p>anto@gmail.com</p>
            </div>
          </div>
        </StyledTicket>
      </StyledContainer>
    );
  }
}

export default MyTicket;
