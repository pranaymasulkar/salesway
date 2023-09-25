import React from "react";
import { Card, Button } from "react-bootstrap";

const ScoreCard = () => {
  return (
    <>
      <Card className="bg-white mb-3 border-0">
        <Card.Body>
          <div className="cirprogress">
            <div className="multigraph">
              <span className="tooltip">70%</span>
              <span className="graph"></span>
            </div>
          </div>
          <hr />
          <div>
            <h6 className="text-capitalize fw-900">you'r good</h6>
            <p className="my-3 fs-14">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Button
              variant="outline-dark"
              className="rounded-pill px-3 text-capitalize fs-15 my-3"
            >
              imporove your score
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ScoreCard;
