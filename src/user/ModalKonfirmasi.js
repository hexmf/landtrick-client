import React, { Component, useState } from "react";
import { Modal } from "react-bootstrap";
import Payment from "./Payment";
import Ticket from "./Ticket";
import ApproveTiket from "./ApproveTiket";
import { Link } from "react-router-dom";

function ModalKonfrimasi() {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button> */}
      <div className="btn-Payment">
        <button type="submit" onClick={() => setShow(true)}>
          Bayar Sekarang
        </button>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
          <p>
            Pembayaran Anda Akan di Konfirmasi dalam 1 x 24 Jam Untuk melihat
            pesanan Klik &nbsp;
            <Link to="/ApproveTiket">
              <strong>Disini</strong>
            </Link>
            &nbsp;TerimaKasih
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalKonfrimasi;
