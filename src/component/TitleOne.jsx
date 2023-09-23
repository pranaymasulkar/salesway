import React from "react";
import { Col, Row, Form } from "react-bootstrap";

const TitleOne = () => {
  return (
    <>
      <Row>
        <Col>
          <h2 className="fw-600 color-black text-capitalize">dashboard</h2>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <label className="fw-500 color-black text-capitalize d-inline-block me-3">
            compare to
          </label>
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

export default TitleOne;
