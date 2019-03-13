import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
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
  Alert
} from "reactstrap";
import cx from "classnames";
import backgroundImage from "./../assets/images/icon/backgroundLogin.png";
import facebook from "./../assets/images/icon/facebook.png";
import google from "./../assets/images/icon/google.png";
import user from "./../assets/images/icon/user.png";
import password from "./../assets/images/icon/password.png";
import underline from "./../assets/images/icon/underline.png";

import commonColor from "./theme/commonColor";
import { Title } from "../components/BaseComponent";
import { Typography, TextField, InputAdornment } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link, withRouter } from "react-router-dom";

// Create a Wrapper component that'll render a <section> tag with some styles

const styles = theme => ({
  row: {
    marginBottom: 10
  },
  col: {},
  textField: {
    display: "flex",
    justifyContent: "center"
  },
  formGroup: {}
});
const ranges = [
  {
    value: "0-20",
    label: "0 to 20"
  },
  {
    value: "21-50",
    label: "21 to 50"
  },
  {
    value: "51-100",
    label: "51 to 100"
  }
];


class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.handleLogin();
    //
  }
  render() {
    const { classes } = this.props;
    return (
      <Container>
        <Row>
          <Col xs="6">
            <Typography variant="title" gutterBottom>
              Sign in
            </Typography>
          </Col>
        </Row>
        {this.props.errorLogin ? (
          <Alert color="danger">Username or Password is incorrect</Alert>
        ) : null}
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <FormGroup>
                <TextField
                  onChange={event => this.props.onChangeUserName(event)}
                  inputProps={{
                    style: { textAlign: "center" }
                  }}
                  InputLabelProps={{
                    style: {
                      textAlign: "center",
                      color: "#7769FF",
                      width: "135%"
                    }
                  }}
                  fullWidth={true}
                  id="username"
                  label="User name"
                  defaultValue=""
                  margin="normal"
                  placeholder="foo"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img style={{ width: "15px" }} src={user} alt="" />
                      </InputAdornment>
                    )
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <FormGroup>
                <TextField
                  onChange={event => this.props.onChangePassword(event)}
                  inputProps={{
                    style: { textAlign: "center" }
                  }}
                  InputLabelProps={{
                    style: {
                      textAlign: "center",
                      color: "#7769FF",
                      width: "135%"
                    }
                  }}
                  className="text-center"
                  style={{ textAlign: "center" }}
                  type="password"
                  fullWidth={true}
                  id="password"
                  label="Password"
                  defaultValue=""
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img style={{ width: "15px" }} src={password} alt="" />
                      </InputAdornment>
                    )
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className={classes.row}>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              {/* <Button
                type="submit"
                block={true}
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Primary
              </Button> */}
              <Button
                style={{ borderRadius: "50px 50px" }}
                type="submit"
                block={true}
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Primary
              </Button>
            </Col>
          </Row>
          <Row className={classes.row}>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Typography
                style={{ textAlign: "center" }}
                variant="subheading"
                gutterBottom
              >
                Forgot Password?
              </Typography>
            </Col>
          </Row>
          <Row className={classes.row}>
            <Col sm="12" md={{ size: 8, offset: 2 }} className="text-center">
              <img
                style={{ width: "20px" }}
                className="mr-2 mt-2"
                src={underline}
                alt=""
              />
              or
              <img
                style={{ width: "20px" }}
                className="ml-2 mt-2"
                src={underline}
                alt=""
              />
            </Col>
          </Row>
        </Form>
        <Row className={classes.row}>
          <Col sm="12" md={{ size: 8, offset: 2 }} className="text-center">
            <img style={{ width: "20%" }} className="" src={facebook} alt="" />
            <img style={{ width: "20%" }} className="" src={google} alt="" />
          </Col>
        </Row>
        <Row>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <img style={{ height: "42%" }} src={backgroundImage} alt="" />
          </Col>
        </Row>
        <div onClick={this.props.onClick}>click</div>
      </Container>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object,
  handleLogin: PropTypes.func,
  onClick: PropTypes.func
};
export default withRouter(withStyles(styles)(Login));
