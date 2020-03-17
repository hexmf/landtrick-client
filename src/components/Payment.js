import React, { Component } from 'react';
import styled from 'styled-components';
import './Payment.css';

const StyledContainer = styled.div`
  font-family: 'MuseoSans_500';
`;

class Payment extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <StyledContainer>
        <h3>Invoice</h3>
        <div className='notice'>
          <span>
            Silakan melakukan pembayaran melalui M-Banking, E-Banking dan ATM ke
            No.rek yang tertera.
          </span>
          <span>No.rek : 0981231212312</span>
        </div>
        <div className='landtick'>
          <div>No. Tanda Pengenal</div>
          <div>Nama Pemesan</div>
          <div>No Handphone</div>
          <div>Email</div>
        </div>
        <h3>Rincian Harga</h3>
        <div className='rincian'>
          <span>Argo Wills (Dewasa) x 1 </span>
          <span>Rp. 250.000</span>
        </div>
        <div className='btnbayar'>
          <button>Bayar Sekarang</button>
        </div>
        <div className='buktitransfer'>
          <span>Upload payment</span>
        </div>
        <div className='qrcode'>
          <div className='qrcodeheader'>
            <h3>Kereta Api</h3>
            <span>Saturday, 21 Februari 2020</span>
          </div>
          <div className='qrcodeleft'>
            <span>Argo Wills</span>
            <span>Eksekutif (H)</span>
          </div>
          <div className='qrcoderight'>
            <span>05.00</span>
            <span>21 Februari 2020</span>
            <span>10.00</span>
            <span>21 Februari 2020</span>
          </div>
          <div>
            <span>Jakarta (GMR)</span>
            <span>Stasiun Gambir</span>
            <span>Surabaya (SBY)</span>
            <span>Stasiun Surabaya</span>
          </div>
        </div>
      </StyledContainer>
    );
  }
}

export default Payment;
