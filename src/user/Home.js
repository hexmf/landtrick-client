import React, { Component } from 'react';
// import { Row, Col, Container, ButtonToolbar } from 'react-bootstrap';
// import Modallogin from './Modallogin';
// import Register from './Register';
import styled from 'styled-components';
import './home.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import DropDown from '../components/DropDown';
// import DropDown from '../components/DropDown';
import { showTicket } from '../_actions/ticketA';

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
  componentDidMount() {
    this.props.showTicket();
  }
  render() {
    // console.log(this.props.datauser);

    const { data } = this.props.showTickets;

    let mytiket;
    if (data) {
      mytiket = data.tiket;
    }
    console.log(mytiket);

    const duration = (sd, ed) => {
      // console.log(sd, ed);
      const start = sd.substring(0, 2);
      const end = ed.substring(0, 2);

      return parseInt(end) - parseInt(start);
    };

    return (
      <StyledContainer>
        {this.props.datauser.status === false ? (
          <DropDown datauser={this.props.datauser} />
        ) : (
          <Navbar />
        )}
        {/* <Navbar /> */}
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
          {mytiket
            ? mytiket.map((value, key) => {
                return (
                  <Train>
                    {/* {console.log(value)} */}
                    <div>
                      <span>{value.name_train}</span>
                      <p>{value.typekeretum.name}</p>
                    </div>
                    <div>
                      <span>{value.startTime}</span>
                      <p>{value.startStation}</p>
                    </div>
                    <div>
                      <span>{value.arivalTime}</span>
                      <p>{value.destinationStation}</p>
                    </div>
                    <div>
                      <span>
                        {duration(value.startTime, value.arivalTime)} H{' '}
                      </span>
                    </div>
                    <div>
                      <span>{value.price}</span>
                    </div>
                  </Train>
                );
              })
            : null}
        </AllSchedule>

        <Footer />
      </StyledContainer>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { showTicket: data => dispatch(showTicket(data)) };
};

const mapStateToProps = state => ({
  datauser: state.users.data,
  showTickets: state.showTicket.data
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
