import React, { Component } from "react";
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
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="4">
            .col-6
            <Row style={{ display : 'flex'}}>
              <div style={{ display: 'flex', justifyContent: 'flex-start', flex : 1}}>all new(5)</div>
                <div style={{display : 'flex', justifyContent : 'flex-end', flex : 1}}>all new(5)</div>
            </Row>
  
            <hr className="mt-5"/>
            
          </Col>
          <Col className="bg-info" xs="8">
            .col-6
          </Col>
        </Row>
      </Container>
    );
  }
}
