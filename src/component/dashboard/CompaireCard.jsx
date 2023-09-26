import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { data } from "../../data";

const CompaireCard = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(
        `http://ec2-34-227-25-226.compute-1.amazonaws.com:8000/sample_assignment_
        api_3/`
      )
      .then((res) => {
        const row = res.data;
        setData(row);
        console.log(row);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const Tcard = [
    {
      title: "purchase",
      price: 345,
      chartrate: "$678",
    },
    {
      title: "revanue",
      price: 345,
      chartrate: "$678",
    },
    {
      title: "return",
      price: 345,
      chartrate: "$678",
    },
  ];
  return (
    <>
      <Row className="pt-4">
        {data &&
          data.map((item, index) => {
            return (
              <>
                <Col lg={4} key={index}>
                  <Card className="rounded p-0 border-0 shadow-sm">
                    <Card.Body>
                      <h6 className="text-capitalize fs-15 fw-400">
                        {item.title}
                      </h6>
                      <div className="d-flex justify-content-start align-items-center">
                        <h2 className="fw-600 mb-0">{item.price}</h2>
                        <p className="m-0 border-1 bg-success px-2 py-1 rounded-pill text-white fs-11 ms-2 opacity-50">
                          {item.chartrate}
                        </p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            );
          })}
      </Row>
    </>
  );
};

export default CompaireCard;
