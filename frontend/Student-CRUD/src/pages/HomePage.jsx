import React from 'react'
import './homePage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function HomePage() {

  return (
    <div>
        <div className="form-container">
  <Form className="custom-form">
  <h1>Student Information</h1>
  <hr className="custom-line" />

    <Form.Group as={Row} className="mb-3" controlId="formName">
      <Form.Label column sm="2">
        Name
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" placeholder="Name" />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formAge">
      <Form.Label column sm="2">
        Age
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" placeholder="Age" />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formContact">
      <Form.Label column sm="2">
        Contact
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" placeholder="Contact" />
      </Col>
    </Form.Group>
    <h1>Gurdian Information</h1>

    <hr className="custom-line" />
    <Form.Group as={Row} className="mb-3" controlId="formName">
      <Form.Label column sm="2">
        Name
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" placeholder="Name" />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formAddress">
      <Form.Label column sm="2">
        Address
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" placeholder="Address" />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formContact">
      <Form.Label column sm="2">
        Contact
      </Form.Label>
      <Col sm="10">
        <Form.Control type="text" placeholder="Contact" />
      </Col>
    </Form.Group>
    <Button variant="success">Register</Button>{' '}
      <Button variant="warning">Clear</Button>{' '}
      <Button variant="warning">View</Button>{' '}

      <br/><br/><br/>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
    
  </Form>


</div>
    </div>
  )
}
