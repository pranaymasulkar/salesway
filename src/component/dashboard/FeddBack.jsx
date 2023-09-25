import React from "react";
import { Card, ProgressBar } from "react-bootstrap";
const FeddBack = () => {
  return (
    <Card className="border-0 mt-3">
      <Card.Body>
        <div>
          <ProgressBar>
            <ProgressBar variant="danger" now={30} key={1} />
            <ProgressBar variant="warning" now={20} key={2} />
            <ProgressBar variant="success" now={50} key={3} />
          </ProgressBar>
          <div className="d-flex">
            <div className="me-4 mt-3">
              <p className="mb-1 fs-300 text-capitalize fs-14">Negative</p>
              <p className="fw-600 mb-2">12</p>
            </div>
            <div className="me-4 mt-3">
              <p className="mb-1 fs-300 text-capitalize fs-14">natural</p>
              <p className="fw-600 mb-2">34</p>
            </div>
            <div className="me-4 mt-3">
              <p className="mb-1 fs-300 text-capitalize fs-14">positive</p>
              <p className="fw-600 mb-2">134</p>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FeddBack;
