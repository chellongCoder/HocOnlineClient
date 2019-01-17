import React, { Component } from 'react'
import commonColor from './theme/commonColor';
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
  FormText,

} from "reactstrap";
import cx from "classnames";
import backgroundImage from "./../assets/images/icon/backgroundLogin.png";
import facebook from "./../assets/images/icon/facebook.png";
import google from "./../assets/images/icon/google.png";
import { Title } from "../components/BaseComponent";

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
export default class Register extends Component {
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
            <Title>Sign up</Title>
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
                <Label style={{ margin: "auto" }} for="exampleEmail">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="with a placeholder"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup style={StyleSheet.inputGroup}>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="select" id="exampleSelect">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup style={StyleSheet.inputGroup}>
                <Label for="exampleNumberPhone">Phone number</Label>
                <Input
                  type="numberPhone"
                  name="numberPhone"
                  id="exampleNumberPhone"
                  placeholder="numberPhone placeholder"
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
              <div style={{ textDecoration: "underline" }}>forgot password</div>
            </Col>
          </Row>

          <Row>
            <Col style={StyleSheet.centerColumn}>
              <img style={{ width: "150px" }} src={facebook} alt="" />
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
