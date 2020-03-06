import React, { Component } from "react";
import { Container, ButtonToolbar } from "react-bootstrap";
import "./IndexAdmin.css";
import ModalInvoice from "./ModalInvoice";
import EditStatus from "./EditStatus";

class IndexAdmin extends Component {
  render() {
    return (
      <div>
        <div className="Adminheader">
          <img className="landticc" src={require("./Img/landtick.PNG")} />
          <img className="profileorang" src={require("./Img/orang.PNG")} />
          <p>Admin</p>
        </div>
        <div className="AdminBody">
          <p>List Transaksi</p>
        </div>
        <div className="AdminTable">
          <Container>
            <table>
              <tr>
                <th style={{ paddingLeft: "100px" }}>No</th>
                <th style={{ paddingLeft: "100px" }}>Users</th>
                <th style={{ paddingLeft: "100px" }}>Tiket</th>
                <th style={{ paddingLeft: "100px" }}>Bukti Transfer</th>
                <th style={{ paddingLeft: "100px" }}>Status Payment</th>
                <th style={{ paddingLeft: "100px" }}>Action</th>
              </tr>
              <div>
                <br></br>
                <br></br>
              </div>
              <tr>
                <td style={{ paddingLeft: "100px" }}>1</td>
                <td style={{ paddingLeft: "100px" }}>Jae</td>
                <td style={{ paddingLeft: "100px" }}>Jakarta-Surabaya</td>
                <td style={{ paddingLeft: "100px" }}>BCA.jpg</td>
                <td style={{ paddingLeft: "100px" }}>Pending</td>
                <td style={{ paddingLeft: "90px" }}>
                  <ButtonToolbar>
                    <ModalInvoice />
                  </ButtonToolbar>
                  <ButtonToolbar>
                    <EditStatus />
                  </ButtonToolbar>
                  {/* <img id="pensil" src={require("./Img/pensil.PNG")} />
                  <img id="delete" src={require("./Img/delete.PNG")} /> */}
                </td>
              </tr>
            </table>
          </Container>
        </div>
        <div className="footersAdmin"></div>
      </div>
    );
  }
}

export default IndexAdmin;
