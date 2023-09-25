import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import BarChart from "../component/dashboard/BarChart";
import CompaireCard from "../component/dashboard/CompaireCard";
import DataTable from "../component/dashboard/DataTable";
import TitleOne from "../component/TitleOne";
import MainLayout from "../layout/MainLayout";

const Home = () => {
  return (
    <div>
      <MainLayout>
        <section className="p-2">
          <Container>
            <Row>
              <Col lg={9}>
                <Row className="">
                  <Card className="border-0 rounded bg-white">
                    <Card.Body>
                      <TitleOne />
                      <CompaireCard />
                      <DataTable />
                    </Card.Body>
                  </Card>
                </Row>
                <div>
                  <BarChart />
                </div>
              </Col>
              <Col lg={3}></Col>
            </Row>
          </Container>
        </section>
      </MainLayout>
    </div>
  );
};

export default Home;
