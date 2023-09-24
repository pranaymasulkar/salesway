import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { data } from "../../data";

const CompaireCard = () => {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     GetData();
  //   }, []);
  //   const GetData = async () => {
  //     axios.get(`data`).then((res) => {
  //       const row = res.data;
  //       setData(row);
  //     });
  //   };

  const Tcard = [
    {
      title: "camera mi 360",
      price: 345,
      chartrate: "$678",
    },
    {
      title: "camera mi 360",
      price: 345,
      chartrate: "$678",
    },
    {
      title: "camera mi 360",
      price: 345,
      chartrate: "$678",
    },
  ];
  return (
    <>
      <Row className="pt-4">
        {Tcard.map((item, index) => {
          return (
            <>
              <Col lg={4} key={index}>
                <Card className="rounded p-0">
                  <Card.Body>
                    <h6 className="text-capitalize">{item.title}</h6>
                    <div className="d-flex justify-content-start">
                      <h3 className="fw-600 ">{item.price}</h3>{" "}
                      <p>{item.chartrate}</p>
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
