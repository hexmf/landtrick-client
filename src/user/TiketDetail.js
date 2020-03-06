import React, { Component } from 'react';
import './TiketDetail.css';

class TiketDetail extends Component {
  render() {
    return (
      <div className='pembungkus'>
        <div className='hkiri'>
          <h1>E-Ticket</h1>
          <p style={{ color: '$767676' }}>Kode Invoice : INV0101</p>
        </div>
        <div className='hkanan'>
          <div>{/* <p>Land Tick</p> */}</div>
        </div>
        {/* kiri */}
        <div className='api'>
          <h3>Kereta Api</h3>
          <p style={{ color: '#878787' }}>Saturday, 21 Febuari 2020</p>
        </div>
        <div className='Argo'>
          <h3>Argo Wilis</h3>
          <p style={{ color: 'black' }}>Eksekutif(H)</p>
        </div>
        <div className='img'>
          <img src={require('./Image/atasbawah.PNG')} alt='' />
        </div>
        <div className='awal'>
          <h3>05.00</h3>
          <p style={{ color: '#878787' }}>21 Febuari 2020</p>
        </div>
        <div className='akhir'>
          <h3>10.05</h3>
          <p style={{ color: '#878787' }}>21 Febuari 2020</p>
        </div>
        {/* kiri end  */}
        {/* tengah */}
        <div className='awal_mulai'>
          <h3>Jakarta(GMR)</h3>
          <p style={{ color: '#878787' }}>Stasiun Gambar</p>
        </div>
        <div className='akhir_sampai'>
          <h3>Surabaya(Sby)</h3>
          <p style={{ color: '#878787' }}>Stasiun Surabaya</p>
        </div>
        <div className='forbarcode'>
          <img src={require('./Image/barcode.PNG')} alt='' />
        </div>
        <hr></hr>
        <div className='footerssskiri'>
          <img src={require('./Image/user.PNG')} alt='' />
          <p>
            Tunjukan e-ticket<br></br> danidentitas para<br></br> penumpang saat
            chekin
          </p>
        </div>
        <div className='tengahfoterss'>
          <img src={require('./Image/jam.PNG')} alt='' />
          <p>
            Check-in{' '}
            <strong>
              Paling lambat<br></br> 90 menit&nbsp;
            </strong>
            sebelum<br></br> keberangkatan
          </p>
        </div>
        <div className='footerssskanan'>
          <img src={require('./Image/tandaseru.PNG')} alt='' />
          <p>
            Waktu tertera adala<br></br>Waktu Stasiun Setempat
          </p>
        </div>
        <hr></hr>
        <div>
          <div className='footersbawah1'>
            <p>No Tanda Pengenal</p>
            <p style={{ color: '#878787' }}>431190921029</p>
          </div>
          <div className='footersbawah2'>
            <p>Nama Pemesan</p>
            <p style={{ color: '#878787' }}>Jae</p>
          </div>
          <div className='footersbawah3'>
            <p>No. Handphone</p>
            <p style={{ color: '#878787' }}>083928918290</p>
          </div>
          <div className='footersbawah4'>
            <p>Email</p>
            <p style={{ color: '#878787' }}>Jaepuding@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
}
export default TiketDetail;
