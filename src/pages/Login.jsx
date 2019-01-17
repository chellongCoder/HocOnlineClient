import React, { Component } from "react";
import styled from "styled-components";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Input,
  Card,
  Button,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  FormText
} from "reactstrap";
import cx from "classnames";
import backgroundImage from "./../assets/images/icon/backgroundLogin.png";
import facebook from "./../assets/images/icon/facebook.png";
import google from "./../assets/images/icon/google.png";

import commonColor from "./theme/commonColor";
import { Title } from "../components/BaseComponent";

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
export const StyleSheet = {
  centerColumn: {
    marginTop: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center"
  },
  row1: {
    display: "flex",
    justifyContent: "left"
  },
  boldText: {
    color: commonColor.textHeader,
    fontSize: 31
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // marginTop: 20,
    marginBottom: 110
  },
  imageBackground: {}
};
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
export default class Login extends Component {
  render() {
    return (
      <Container
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          fontSize: 18
        }}
      >
        <Row
          style={{
            flex: 1 / 10,
            height: "100%",
            alignItems: "flex-end"
          }}
        >
          <Col style={StyleSheet.row1}>
            {/* <div style={StyleSheet.boldText}>Sign in</div> */}
            <Title>Sign in</Title>
          </Col>
        </Row>
        <Form
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Row>
            <Col>
              <FormGroup style={StyleSheet.inputGroup}>
                <Label style={{ margin: "auto" }} for="exampleUsername">
                  User name
                </Label>
                <Input
                  type="text"
                  name="username"
                  id="exampleUsername"
                  placeholder="username placeholder"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup style={StyleSheet.inputGroup}>
                <Label style={{ margin: "auto" }} for="examplePassword">
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password placeholder"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button color="primary" size="lg" block>
                Block level button
              </Button>
            </Col>
          </Row>

          <Row>
            <Col
              style={StyleSheet.centerColumn}
            >
              <div style={{ textDecoration: "underline"}}>forgot password</div>
            </Col>
          </Row>

          <Row>
            <Col style={StyleSheet.centerColumn}>
              <img style={{width : "150px"}} src={facebook} alt=""/>
              <img style={{ width: "150px" }} src={google} alt="" />
            </Col>
          </Row>

          <Row>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end"
              }}
            >
              <img
                style={{ width: "300px", height: "70%" }}
                src={backgroundImage}
                className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                alt=""
              />
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
