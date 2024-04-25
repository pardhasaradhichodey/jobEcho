import React from "react";
import { Container, Row, Col } from "reactstrap";
import NavigationBar from "../../components/navbar";
const Demo = () => {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Row>
          <Col>Demo</Col>
        </Row>
      </Container>
    </div>
  );
};
export default Demo;