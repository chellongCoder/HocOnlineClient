import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const StyleSheet = {
  container : {
    background : "red",
    flex : 1,
    flexDirection: 'row',
    alignItems: 'center', 
  }
}
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
export default class Login extends Component {
  render() {
    return <Container >
        <Row>
          <Col style={{ background: getRandomColor() }}>.col</Col>
        </Row>
        <Row>
          <Col style={{ background: getRandomColor() }}>.col</Col>
          <Col style={{ background: getRandomColor() }}>.col</Col>
        <Col style={{ background: getRandomColor() }}>.col</Col>
        <Col style={{ background: getRandomColor() }}>.col</Col>
        </Row>
        <Row>
        <Col style={{ background: getRandomColor() }} xs="3">.col-3</Col>
        <Col style={{ background: getRandomColor() }} xs="auto">.col-auto - variable width content</Col>
        <Col style={{ background: getRandomColor() }} xs="3">.col-3</Col>
        </Row>
        <Row>
        <Col style={{ background: getRandomColor() }} xs="6">.col-6</Col>
        <Col style={{ background: getRandomColor() }} xs="6">.col-6</Col>
        </Row>
        <Row>
        <Col style={{ background: getRandomColor() }} xs="6" sm="4">
            .col-6 .col-sm-4
          </Col>
        <Col style={{ background: getRandomColor() }} xs="6" sm="4">
            .col-6 .col-sm-4
          </Col>
        <Col style={{ background: getRandomColor() }} sm="4">.col-sm-4</Col>
        </Row>
        <Row>
        <Col style={{ background: getRandomColor() }} sm={{ size: 6, order: 2, offset: 1 }}>
            .col-sm-6 .order-sm-2 .offset-sm-1
          </Col>
        </Row>
        <Row>
        <Col style={{ background: getRandomColor() }} sm="12" md={{ size: 6, offset: 3 }}>
            .col-sm-12 .col-md-6 .offset-md-3
          </Col>
        </Row>
        <Row>
        <Col style={{ background: getRandomColor() }} sm={{ size: "auto", offset: 1 }}>
            .col-sm-auto .offset-sm-1
          </Col>
        <Col style={{ background: getRandomColor() }} sm={{ size: "auto", offset: 1 }}>
            .col-sm-auto .offset-sm-1
          </Col>
        </Row>
      </Container>;
  }
}

