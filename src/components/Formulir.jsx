import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulir = () => {
  return (
    <Row className="">
      <Col md={6} lg={12} sm={12}>
        <Form className="mx-10 mt-4">
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label className="font-semibold text-xl">Item</Form.Label>
            <Form.Control type="email" placeholder="What do you want to do ?" />
            <Form.Text className="text-muted">Enter what you want</Form.Text>
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="What do you want to do ?" />
            <Form.Text className="text-muted">Enter what you want</Form.Text>
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="What do you want to do ?" />
            <Form.Text className="text-muted">Enter what you want</Form.Text>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Formulir;
