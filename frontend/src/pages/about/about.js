import React from "react";
import { Container, Row, Col } from "reactstrap";
import NavigationBar from "../../components/navbar";
const About = () => {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Row>
          <Col>About Us</Col>
        </Row>
      </Container>
    </div>
  );
};
export default About;