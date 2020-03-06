import React, { Component } from "react";
import { Form, Container } from "react-bootstrap";
import "./AddTiket.css";

class AddTiket extends Component {
  render() {
    return (
      <div>
        <div className="AddtiketHeader">
          <img className="landticc" src={require("./Img/landtick.PNG")} />
          <img className="profileorang" src={require("./Img/orang.PNG")} />
          <p>Admin</p>
        </div>
        <div className="AddTiketBody">
          <p>Tambah Tiket</p>
        </div>
        <Container>
          <div className="formAddTiket">
            <Form>
              <Form.Group controlId="formBasicGender">
                <Form.Label>Nama Kereta</Form.Label>
                <Form.Control type="text" placeholder="Nama Kereta" />
              </Form.Group>
              <Form.Group controlId="formGridState">
                <Form.Label>Jenis Kereta</Form.Label>
                <Form.Control
                  as="select"
                  placeholder="Jenis Kereta"
                  value="Choose..."
                >
                  <option>Ekonomi</option>
                  <option>Eksekutif</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Tanggal Keberangkatan</Form.Label>
                <Form.Control type="text" placeholder="Tanggal Keberangkatan" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Stasiun Keberangkatan</Form.Label>
                <Form.Control type="text" placeholder="Stasiun Keberangkatan" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Jam Keberangkatan</Form.Label>
                <Form.Control type="text" placeholder="Jam Keberangkatan" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Stasiun Tujuan</Form.Label>
                <Form.Control type="text" placeholder="Stasiun Tujuan" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Jam Tiba</Form.Label>
                <Form.Control type="text" placeholder="Jam Tiba" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Harga Tiket</Form.Label>
                <Form.Control type="text" placeholder="Harga Tiket" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Qty</Form.Label>
                <Form.Control type="text" placeholder="Qty" />
              </Form.Group>
              <button className="btn-addtiket">Save</button>
            </Form>
          </div>
        </Container>
        <div className="footersAddTiket"></div>
      </div>
    );
  }
}

export default AddTiket;
