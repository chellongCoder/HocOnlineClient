import React, { Component } from "react";
import commonColor from "./theme/commonColor";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Card,
  CardTitle,
  CardText,
  Form,
  FormGroup,
  Label,
  FormText,
  Button
} from "reactstrap";
import cx from "classnames";
import backgroundImage from "./../assets/images/icon/backgroundLogin.png";
import facebook from "./../assets/images/icon/facebook.png";
import google from "./../assets/images/icon/google.png";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import SvgIcon from "@material-ui/core/SvgIcon";
import InputAdornment from "@material-ui/core/InputAdornment";
import mail from "./../assets/images/icon/baseline-mail_outline-black-18/2x/baseline_mail_outline_black_18dp.png";
import country from "./../assets/images/icon/sharp-map-black-18/2x/sharp_map_black_18dp.png";
import phone from "./../assets/images/icon/baseline-phone-black-18/2x/baseline_phone_black_18dp.png";
import { Link, withRouter } from "react-router-dom";
import { MenuItem, TextField } from "@material-ui/core";

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

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("ok");
    this.props.history.push("/login");
  }
  render() {
    const { classes } = this.props;
    return (
      <Container>
        <Row className={classes.row}>
          <Col xs="6">
            <Typography variant="title" gutterBottom>
              Sign up
            </Typography>
          </Col>
        </Row>

        <Form onSubmit={this.handleSubmit}>
          <Row className={classes.row}>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <FormGroup>
                <TextField
                  fullWidth={true}
                  id="username"
                  label="User name"
                  defaultValue="foo"
                  className={classes.textField}
                  margin="normal"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className={classes.row}>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <FormGroup>
                {/* */}
                <TextField
                  fullWidth={true}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img style={{ width: "20px" }} src={mail} alt="" />
                      </InputAdornment>
                    )
                  }}
                  id="email"
                  label="Email address"
                  defaultValue="foo"
                  className={classes.textField}
                  margin="normal"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col style={{ paddingTop: 15 }} sm={{ size: "4", offset: 2 }}>
              <FormGroup>
                {/* */}
                <TextField
                  select
                  label="Country"
                  value={"no"}
                  className={classes.textField}
                  fullWidth={true}
                  // onChange={this.handleChange('weightRange')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img style={{ width: "20px" }} src={country} alt="" />
                      </InputAdornment>
                    )
                  }}
                >
                  {ranges.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </FormGroup>
            </Col>
            <Col sm={{ size: "4", offset: 1.5 }}>
              <FormGroup>
                {/* */}
                <TextField
                  fullWidth={true}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <img style={{ width: "20px" }} src={phone} alt="" />
                      </InputAdornment>
                    )
                  }}
                  id="Number phone"
                  label="Number phone"
                  defaultValue="foo"
                  // className={classes.textField}
                  margin="normal"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className={classes.row}>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <FormGroup>
                <TextField
                  fullWidth={true}
                  id="password"
                  label="Password"
                  type="password"
                  defaultValue="foo"
                  className={classes.textField}
                  margin="normal"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row className={classes.row}>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Button
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
            <Col style={{display : 'flex', justifyContent : 'center', verticalAlign : 'center'}} sm="12" md={{ size: 8, offset: 2 }}>
              <Typography style={{textAlign : 'center'}} component="h2" variant="headline" gutterBottom>
                Have an accout? 
              </Typography>
              <Typography style={{marginTop : "0.8%", marginLeft : '1%'}} component="h6" variant="subheading" gutterBottom>
                SIGN UP
              </Typography>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <img style={{  height : '42%'}} src={backgroundImage} alt="" />
          </Col>
        </Row>
      </Container>
    );
  }
}

Register.propTypes = {
  classes: PropTypes.object
};
export default withRouter(withStyles(styles)(Register));
