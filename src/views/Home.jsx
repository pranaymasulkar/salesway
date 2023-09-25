import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import BarChart from "../component/dashboard/BarChart";
import CompaireCard from "../component/dashboard/CompaireCard";
import CustomerDevoice from "../component/dashboard/CustomerDevoice";
import DataTable from "../component/dashboard/DataTable";
import FeddBack from "../component/dashboard/FeddBack";
import ScoreCard from "../component/dashboard/ScoreCard";
import TitleOne from "../component/TitleOne";
import MainLayout from "../layout/MainLayout";

const Home = () => {
  return (
    <div>
      <MainLayout>
        <section className="py-3">
          <Container>
            <Row>
              <Col lg={9}>
                <Row className="">
                  <Card className="py-3 border-0 rounded bg-white">
                    <Card.Body>
                      <TitleOne />
                      <CompaireCard />
                      <BarChart />
                      <DataTable />
                    </Card.Body>
                  </Card>
                </Row>
              </Col>
              <Col lg={3}>
                <ScoreCard />
                <CustomerDevoice />
                <FeddBack />
              </Col>
            </Row>
          </Container>
        </section>
      </MainLayout>
    </div>
  );
};

export default Home;
