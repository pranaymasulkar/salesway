import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { data } from "../../data";

const CompaireCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetData();
  }, []);
  const GetData = async () => {
    axios.get(`data`).then((res) => {
      const row = res.data;
      setData(row);
    });
  };

  return (
    <>
      <Row className="pt-4">
        {data.map((item) => {
          <Col lg={4}>
            <Card className="rounded p-0">
              <Card.Body>
                <h6 className="text-capitalize">Purches</h6>
                <div className="d-flex justify-content-start">
                  <h3 className="fw-600 ">324</h3> <p>+4234</p>
                </div>
              </Card.Body>
            </Card>
          </Col>;
        })}
      </Row>
    </>
  );
};

export default CompaireCard;
