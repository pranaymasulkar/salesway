import React, { useState } from "react";
import { Col, Container, Row, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  const history = useNavigate();

  const handleUser = (e) => {
    setUser(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const handleLogin = (e) => {
    if ((user === "trial") & (pass === "assignment123")) {
      console.log("Login Successfully");
      history("/home");
    } else {
      console.log("Enter Coorrect Details");
      setErr("Enter Coorrect Details");
    }
  };
  return (
    <div>
      <section className="loginpage d-flex justify-content-center align-items-center bg-dark ">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md={4}>
              <Card className="p-5 shadow border-0 bg-white opacity-100">
                <Card.Body>
                  <h3 className="fw-900 text-black text-uppercase mb-3 text-center mb-5">
                    salesway
                  </h3>

                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        onChange={handleUser}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        onChange={handlePass}
                      />
                    </Form.Group>
                    <span className="text-danger" id="SignleError">
                      {err}
                    </span>
                    <Button
                      variant="dark"
                      className="w-100 p-2 fw-900 mt-3"
                      onClick={handleLogin}
                    >
                      Log In
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Login;
