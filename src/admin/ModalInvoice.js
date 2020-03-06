import React, { Component, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import IndexAdmin from "./IndexAdmin";
import "./ModalInvoice.css";

function ModalInvoice() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <img id="src" onClick={handleShow} src={require("./Img/src.PNG")} />
      <div>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <div className="ModalInvoiceheaderkiri">
            <img src={require("./Img/landtickbackground.PNG")} />
          </div>
          <div className="ModalInvoiceheaderkanan">
            <p onClick={handleClose}>&#10060;</p>
          </div>
          <div className="ModalInvoiceBody">
            <div className="textInvoice">
              <h1>Invoice</h1>
              <p>Kode Invoice: INV0101</p>
            </div>
            <div className="MInvoiceKeretaApi">
              <h3>Kereta Api</h3>
              <p style={{ color: "#878787" }}>Saturday, 21 Febuari 2020</p>
              <img
                className="barcodmodalinvoice"
                src={require("./Img/barcode.PNG")}
              />
            </div>
            <div className="argomodalinvoice">
              <h3>Argo Wills</h3>
              <p style={{ color: "#878787" }}>Eksekutif(H)</p>
            </div>
            <div className="PPmodalinvoice">
              <img src={require("./Img/atasbawah.PNG")} />
            </div>
            <div className="jamberangkatmodalinvoice">
              <h3>05.00</h3>
              <p style={{ color: "#878787" }}>21, Febuari 2020</p>
            </div>
            <div className="jamsampaimodalinvoice">
              <h3>21.05</h3>
              <p style={{ color: "#878787" }}>21, Febuari 2020</p>
            </div>
            <div>
              <div className="namakotamulaimodalinvoice">
                <h3>Jakarta(GMR)</h3>
                <p style={{ color: "#878787" }}>Stasiun Gambir</p>
              </div>
              <div className="namakotaendmodalinvoice">
                <h3>Jakarta(GMR)</h3>
                <p style={{ color: "#878787" }}>Stasiun Gambir</p>
              </div>
            </div>
            <div id="uploadfotoinvoice">
              <img src={require("./Img/buktitrf.jpg")} />
            </div>
            <div className="invoicenopemesanan">
              <p>No. Tanda Pengenal</p>
              <p style={{ color: "#878787", marginLeft: "10px" }}>
                32131242131
              </p>
            </div>
            <div className="invoicenamapemesanan">
              <p>Nama Pemesan</p>
              <p style={{ color: "#878787", marginLeft: "10px" }}>Jae</p>
            </div>
            <div className="invoicenohppemesanan">
              <p>No.Handphone</p>
              <p style={{ color: "#878787", marginLeft: "10px" }}>
                08592173829
              </p>
            </div>
            <div className="invoiceemailpemesanan">
              <p>Email</p>
              <p style={{ color: "#878787", marginLeft: "5px" }}>
                Jae@gmail.com
              </p>
            </div>
            <div className="footersmodalinvoice">
              <h3>Total: </h3>
              <h4>Rp. 250.000</h4>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
}
export default ModalInvoice;
