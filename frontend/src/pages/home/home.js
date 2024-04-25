// Home.js
import React from "react";
import { Container, Row, Col } from "reactstrap";
import NavigationBar from "../../components/navbar";
import "./home.css";
import logo from "./logo.png";
const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col xs="6" md="10">
            <h1 className="title">#JobEcho</h1>
            <h3 className="subtitle">
              Find the Perfect job in a impactful way!
            </h3>
          </Col>
          <Col xs="6" md="2">
            <img className="logo" src={logo} alt="logo" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h4>i</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
