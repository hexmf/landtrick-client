import React, { Component } from 'react';
// import { Row, Col, Container, ButtonToolbar } from 'react-bootstrap';
// import Modallogin from './Modallogin';
// import Register from './Register';
import styled from 'styled-components';
import './home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import NavbarLoggedIn from '../components/NavbarLoggedIn';

const StyledContainer = styled.div`
  font-family: 'MuseoSans_500';
`;
const AllSchedule = styled.div`
  /* margin-top: 216px; */
  justify-content: space-around;
  margin-left: 250px;
`;

const ScheduleTitle = styled.div`
  display: flex;
  justify-content: space-around;
  width: 1220px;
`;

const Train = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-around;
  /* align-content: center; */
  /* justify-content: center; */
  width: 1220px;
  margin-top: 10px;
  /* column-gap: 8px; */
  border: 1px solid #b7b7b7;
  box-sizing: border-box;
  border-radius: 5px;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    };
  }
  render() {
    return (
      <StyledContainer>
        <Navbar />

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

        <AllSchedule>
          <ScheduleTitle>
            <h4>Train Name</h4>
            <h4>Depart</h4>
            <h4>Arrive</h4>
            <h4>Duration</h4>
            <h4>Price per person</h4>
          </ScheduleTitle>
          <Train>
            <span>Argo Wilis</span>
            <span>05.00</span>
            <span>10.05</span>
            <span>5h 05m </span>
            <span>Rp. 250.000</span>
          </Train>
          <Train>
            <span>Argo Wilis</span>
            <span>05.00</span>
            <span>10.05</span>
            <span>5h 05m </span>
            <span>Rp. 250.000</span>
          </Train>
          <Train>
            <span>Argo Wilis</span>
            <span>05.00</span>
            <span>10.05</span>
            <span>5h 05m </span>
            <span>Rp. 250.000</span>
          </Train>
        </AllSchedule>

        <Footer />
      </StyledContainer>
    );
  }
}

export default Home;
