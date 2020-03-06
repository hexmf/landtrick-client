import React, { Component } from "react";
import { Row, Col, ButtonToolbar } from "react-bootstrap";
import ModalKonfrimasi from "./ModalKonfirmasi";
import "./Payment.css";

class Payment extends Component {
  render() {
    return (
      <div>
        <div className="Paymentheader">
          <img className="landticc" src={require("./Image/landtick.PNG")} />
          <img className="profileorang" src={require("./Image/orang.PNG")} />
          <p>Jae</p>
        </div>

        <div className="Paymentbodyleft">
          <div className="invoicepayment">
            <p>Invoice</p>
          </div>
          <div className="AlertPayment">
            <img src={require("./Image/tandaalert.PNG")} />
            <p>
              Silahkan melakukan pembayaran melalui M-Banking, E-Banking dan ATM
              ke No.rek Yang Tertera.
            </p>
            <span>No.Rek : 0987896082</span>
          </div>
          <div className="Paymentlendtic">
            <div className="isipaymentkiri">
              <img src={require("./Image/landtickbackground.PNG")} />
            </div>
            <div id="paymenttandapengenal">
              <p>No. Tanda Pengenal</p>
            </div>
            <div id="paymentnamapemesan">
              <p>Nama Pemesan</p>
            </div>
            <div id="paymentnohp">
              <p>No. Handphone</p>
            </div>
            <div id="paymentemail">
              <p>Email</p>
            </div>
            <hr></hr>
            <div id="isipaymenttandapengenal">
              <p>090808909</p>
            </div>
            <div id="isipaymentnamapemesan">
              <p>Jae</p>
            </div>
            <div id="isipaymentnohp">
              <p>08792718909</p>
            </div>
            <div id="isipaymentemail">
              <p>Jae@gmail.com</p>
            </div>
          </div>
          <div className="rincianharga">
            <h3>Rincian Harga</h3>
          </div>
          <div className="tabelpayment">
            <h5>Argo Wilis (Dewasa)X1</h5>
            <p>Rp.250.000</p>
            <div className="Paymenttotal">
              <p>Total :</p>
              <h3>Rp.250.000</h3>
            </div>
            <ButtonToolbar>
              <ModalKonfrimasi />
            </ButtonToolbar>
            {/* <div className="btn-Payment">
              <button type="submit">Bayar Sekarang</button>
            </div> */}
            <div className="buktiPayment">
              <img src={require("./Image/buktitrf.jpg")} />
            </div>
          </div>
        </div>

        <div className="Paymentbodyright">
          <div id="barcodekeretapii">
            <h3>Kereta Api</h3>
            <h4>Saturday, 21 Febuari 2020</h4>
            <img src={require("./Image/barcodeabu.PNG")} />
          </div>
          <div id="barcodekeretapiibawah">
            <h3>Argo Wills</h3>
            <p>Eksekutif(H)</p>
            <img src={require("./Image/atasbawahabu.PNG")} />
          </div>
          <div id="jamberangkat">
            <h3>05.00</h3>
            <p style={{ color: "#959595" }}>21 Febuari 2020</p>
          </div>
          <div id="jamsampai">
            <h3>10.05</h3>
            <p style={{ color: "#959595" }}>21 Febuari 2020</p>
          </div>
          <div id="stasiunstart">
            <h3>Jakarta (GMR)</h3>
            <p style={{ color: "#959595" }}>Stasiun Gambir</p>
          </div>
          <div id="stasiunend">
            <h3>Surabaya (SBY)</h3>
            <p style={{ color: "#959595" }}>Stasiun Gambir</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
