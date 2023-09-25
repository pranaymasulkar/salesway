import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const DemoPage = (props) => {
  return (
    <>
      <section className="py-3">
        <Container>
          <Row>
            <Col>
              <Card className="bg-white p-5 border-0 text-center">
                <Card.Body>
                  <h1>
                    {" "}
                    <p className="text-uppercase fw-900 text-success">
                      {props.title}
                    </p>{" "}
                    Page Under Cunstruction
                  </h1>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DemoPage;
