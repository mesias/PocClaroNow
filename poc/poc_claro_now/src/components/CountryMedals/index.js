import React from "react"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import Tab from "react-bootstrap/Tab"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Table from "react-bootstrap/Table"
import Nav from "react-bootstrap/Nav"
import medals_mock from '../../assets/medals_mock';
import './CountryMedals.css'

export default (props) => {
    const modals = props.country ? medals_mock[props.country].modals : {}
    console.log(modals)
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName="countryDialog"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.country}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Tab.Container id="left-tabs-example" defaultActiveKey="mod_0">
  <Row>
    <Col sm={9}>
      {
            Object.keys(modals).map((modkey, idx) =>
              <div>
                <h3>{modkey}</h3>
                    <Table borderless>
                        <thead>
                            <tr>
                                <td></td>
                                <td><div className="circleBase gold"/></td>
                                <td><div className="circleBase silver"/></td>
                                <td><div className="circleBase bronze"/></td>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            Object.keys(modals[modkey]).map((k, ik) =>
                                <tr>
                                    <td>{k}</td>
                                    { 
                                        modals[modkey][k].map((v) =>
                                            <td>{v}</td>
                                        )
                                    }
                                </tr>
                            )
                        }
                        </tbody>
                    </Table>
                  </div>
            )
      }
    </Col>
  </Row>
</Tab.Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }