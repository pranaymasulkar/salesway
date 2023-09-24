import React from "react";
import { Col, Row, Form } from "react-bootstrap";

const TitleTwo = () => {
  return (
    <>
      <Row>
        <Col>
          <h2 className="fw-600 color-black text-capitalize">props.title</h2>
        </Col>
        <Col md={3} className="d-flex justify-content-end align-items-center">
          <Form.Select aria-label="Last Year" className="w-50 rounded-pill">
            <option>Last Year</option>
            <option value="1">2023</option>
            <option value="2">2022</option>
            <option value="3">2021</option>
          </Form.Select>
        </Col>
      </Row>
    </>
  );
};

export default TitleTwo;
