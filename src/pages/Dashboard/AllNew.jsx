import React, { Component } from 'react'
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
  ListGroup,
  ListGroupItem
} from "reactstrap";
import ItemTimeline from '../../components/itemTimeline';
import './../css/index.css';
import commonColor from '../theme/commonColor';

import option from './../../assets/images/icon/option.png';
import CommonStyle from '../theme/commonStyle';
const data = [
  {
    name : "chel long",
    type : "student",
    checkinTime : 23443667,
    content : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum officia reprehenderit minima ad alias, facilis ut repellat suscipit possimus quae, deleniti impedit? Eligendi expedita recusandae mollitia, quis aperiam veritatis fuga.",

  },
  {
    name: "chel long",
    type: "student",
    checkinTime: 23443667,
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum officia reprehenderit minima ad alias, facilis ut repellat suscipit possimus quae, deleniti impedit? Eligendi expedita recusandae mollitia, quis aperiam veritatis fuga.",

  },
  {
    name: "chel long",
    type: "student",
    checkinTime: 23443667,
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum officia reprehenderit minima ad alias, facilis ut repellat suscipit possimus quae, deleniti impedit? Eligendi expedita recusandae mollitia, quis aperiam veritatis fuga.",

  }, {
    name: "chel long",
    type: "student",
    checkinTime: 23443667,
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum officia reprehenderit minima ad alias, facilis ut repellat suscipit possimus quae, deleniti impedit? Eligendi expedita recusandae mollitia, quis aperiam veritatis fuga.",

  }
]
export class AllNew extends Component {
  renderItem(value, index) {
    return (
      <ListGroupItem>
        <ItemTimeline />
      </ListGroupItem>
    )
  }
  render() {
    return (
      <div className="container-fluid">
        <Row>
          <Col sm={{ size: 4, offset: 1 }} xs="4" className="bg-primary">
            <Row style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flex: 1
                }}
                className="mt-3 ml-3"
              >
                All New (5)
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flex: 1
                }}
              >
                <img className="option mr-3 mt-3" src={option} alt="#" />
              </div>
            </Row>
            <hr className="mt-5" />
            <div
              style={{
                height: commonColor.deviceHeight - 110,
                overflow: "auto"
              }}
            >
              {data.map((value, index) => {
                return this.renderItem(value, index);
              })}
              {/* <ListGroupItem>
                <ItemTimeline />
              </ListGroupItem> */}
              {/* <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Morbi leo risus</ListGroupItem>
              <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
            </div>
          </Col>
          <Col sm={{ size: 7 }} className="bg-info" xs="8">
            .col-6
          </Col>
        </Row>
      </div>
    );
  }
}

export default AllNew