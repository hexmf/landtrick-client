import React, { Component } from 'react';
// import { Row, Col, Container, ButtonToolbar } from 'react-bootstrap';
// import Modallogin from './Modallogin';
// import Register from './Register';
import styled from 'styled-components';
import './home.css';
import Navbar from '../components/Navbar';
// import NavbarLoggedIn from '../components/NavbarLoggedIn';

const StyledContainer = styled.div`
  font-family: 'MuseoSans_500';
`;

class Home extends Component {
  render() {
    return (
      <StyledContainer>
        <Navbar />
        {/* <NavbarLoggedIn /> */}
        <div className='slider1'>
          <div className='fortext'>
            <h2>Selamat Pagi, Ticket Seekers !</h2>
            <span>ingin Pulkam dengan Good Deal ?</span>
            <p>Masuk dan Daftar Sekarang!!!</p>
          </div>
          <div>
            <img
              className='image2'
              src={require('./Image/image2.jpg')}
              alt=''
            />
            <img
              className='image1'
              src={require('./Image/image1.jpg')}
              alt=''
            />
          </div>
        </div>

        <div className='tiketapi'>
          <div className='tiketapigrounddlm'>
            <div className='pembungkusiconkereta'>
              <img
                className='kereta'
                src={require('./Image/iconkereta.png')}
                alt=''
              />
              <p style={{ marginLeft: '100px', marginTop: '-30px' }}>
                Tiket Kereta Api
              </p>
            </div>
          </div>
          {/* tiket api  */}
          <div className='tiketapitengah'>
            <p>Tiket Kereta Api</p>
            <div id='isitiketapi'>
              <h2>Asal</h2>
              <input className='asal' type='text' placeholder='Jakarta' />

              <input className='chekbox' type='checkbox' />
              <p
                style={{
                  fontSize: '15px',
                  marginLeft: '270px',
                  marginTop: '-20px'
                }}
              >
                Pulang Pergi
              </p>
              <h3>Tanggal Berangkat</h3>
              <input
                style={{
                  width: '138px',
                  height: '30px',
                  border: '2px solid #B1B1B1',
                  boxSizing: 'border-box',
                  borderRadius: '5px',
                  marginLeft: '20px'
                }}
                type='date'
              />
            </div>
          </div>

          <div className='tiketapikanan'>
            <h2>Tujuan</h2>
            <input className='tujuan' type='text' placeholder='Tokyo' />

            <div>
              <h4 className='Dewasa1'>Dewasa</h4>
              <input className='Dewasa' type='number' name='qty' />
            </div>
            <div>
              <h4 className='bayi1'>Bayi</h4>
              <input className='Bayi' type='number' name='qty' />
              <button className='CariTiket' type='input'>
                Cari Tiket
              </button>
            </div>
          </div>
        </div>
        {/* body */}
        <div className='Body'>
          <table style={{ marginLeft: '20px' }}>
            <tr>
              <th style={{ paddingTop: '30px', paddingLeft: '80px' }}>
                Nama Kereta
              </th>
              <th style={{ paddingTop: '30px', paddingLeft: '80px' }}>
                Berangkat
              </th>
              <th style={{ paddingTop: '30px', paddingLeft: '80px' }}>Tiba</th>
              <th style={{ paddingTop: '30px', paddingLeft: '80px' }}>
                Durasi
              </th>
              <th style={{ paddingTop: '30px', paddingLeft: '200px' }}>
                Harga Per Orang
              </th>
            </tr>
          </table>
          <div className='pesanan1'>
            <table style={{ marginLeft: '20px' }}>
              <tr>
                <th style={{ paddingTop: '30px', paddingLeft: '80px' }}>
                  Argo Wills
                </th>
                <th style={{ paddingTop: '30px', paddingLeft: '120px' }}>
                  05.00
                </th>
                <th style={{ paddingTop: '30px', paddingLeft: '100px' }}>
                  10.05
                </th>
                <th style={{ paddingTop: '30px', paddingLeft: '70px' }}>
                  5j 05m
                </th>
                <th
                  style={{
                    paddingTop: '30px',
                    paddingLeft: '210px',
                    color: '#EC7A7A'
                  }}
                >
                  Rp. 250.000
                </th>
              </tr>
            </table>
          </div>
          <div className='pesanan2'>
            <table style={{ marginLeft: '20px' }}>
              <tr>
                <th style={{ paddingTop: '30px', paddingLeft: '80px' }}>
                  Argo Wills
                </th>
                <th style={{ paddingTop: '30px', paddingLeft: '120px' }}>
                  05.00
                </th>
                <th style={{ paddingTop: '30px', paddingLeft: '100px' }}>
                  10.05
                </th>
                <th style={{ paddingTop: '30px', paddingLeft: '70px' }}>
                  5j 05m
                </th>
                <th
                  style={{
                    paddingTop: '30px',
                    paddingLeft: '210px',
                    color: '#EC7A7A'
                  }}
                >
                  Rp. 250.000
                </th>
              </tr>
            </table>
          </div>
          <div className='pesanan3'>
            <table style={{ marginLeft: '20px' }}>
              <tr>
                <th style={{ paddingTop: '30px', paddingLeft: '80px' }}>
                  Argo Wills
                </th>
                <th style={{ paddingTop: '30px', paddingLeft: '120px' }}>
                  05.00
                </th>
                <th style={{ paddingTop: '30px', paddingLeft: '100px' }}>
                  10.05
                </th>
                <th style={{ paddingTop: '30px', paddingLeft: '70px' }}>
                  5j 05m
                </th>
                <th
                  style={{
                    paddingTop: '30px',
                    paddingLeft: '210px',
                    color: '#EC7A7A'
                  }}
                >
                  Rp. 250.000
                </th>
              </tr>
            </table>
          </div>
        </div>

        {/* footer */}
        <div className='footer'></div>
      </StyledContainer>
    );
  }
}

export default Home;
