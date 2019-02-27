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
  FormText,
  ListGroup,
  ListGroupItem,
  InputGroupAddon
} from "reactstrap";
import ItemTimeline from "../../components/itemTimeline";
import "./../css/index.css";
import commonColor from "../theme/commonColor";
import ReactMarkdown from "react-markdown";
import AnimateHeight from "react-animate-height";
import option from "./../../assets/images/icon/option.png";
import CommonStyle from "../theme/commonStyle";
import { toJS } from "mobx";
import Blur from "react-blur";

const data = [
  {
    name: "chel long",
    type: "student",
    checkinTime: 23443667,
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum officia reprehenderit minima ad alias, facilis ut repellat suscipit possimus quae, deleniti impedit? Eligendi expedita recusandae mollitia, quis aperiam veritatis fuga."
  },
  {
    name: "chel long",
    type: "student",
    checkinTime: 23443667,
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum officia reprehenderit minima ad alias, facilis ut repellat suscipit possimus quae, deleniti impedit? Eligendi expedita recusandae mollitia, quis aperiam veritatis fuga."
  },
  {
    name: "chel long",
    type: "student",
    checkinTime: 23443667,
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum officia reprehenderit minima ad alias, facilis ut repellat suscipit possimus quae, deleniti impedit? Eligendi expedita recusandae mollitia, quis aperiam veritatis fuga."
  },
  {
    name: "chel long",
    type: "student",
    checkinTime: 23443667,
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum officia reprehenderit minima ad alias, facilis ut repellat suscipit possimus quae, deleniti impedit? Eligendi expedita recusandae mollitia, quis aperiam veritatis fuga."
  }
];
class Comment extends Component {
  render () {
    return (
      <div
        style={{
          backgroundColor: commonColor.contentBackground,
          opacity: 1,
          display: "flex"
        }}
      >
        <div
          sm={{ size: 2 }}
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flex: 2 / 10
          }}
        >
          <div
            style={{
              backgroundColor: commonColor.commonBackground,
              height: 50,
              width: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            M
          </div>
        </div>
        <div style={{ flex: 8 / 10 }} sm={{ size: 10 }}>
          {`${"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, excepturi vel pariatur, dolorem sapiente nemo quasi maxime incidunt nobis in natus quaerat consequuntur. Officia incidunt dolores eaque cupiditate rem iste?"}\nLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, excepturi vel pariatur, dolorem sapiente nemo quasi maxime incidunt nobis in natus quaerat consequuntur. Officia incidunt dolores eaque cupiditate rem iste?`}
        </div>
      </div>
    )
  }
}
export class AllNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      height: "300"
    };
    this.changeHeight = this.changeHeight.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }
  changeHeight() {
    this.setState({ height: 100 });
  }
  componentWillMount() {
    fetch("./../../../demo.md")
      .then(response => response.text())
      .then(text => {
        console.log("text", text);
        if (this.state.input === "") {
          this.setState({ input: text });
        }
      });
  }

  onFocus() {
    console.log("focus");
    this.setState({height : 500});
  }

  renderItem(value, index) {
    return (
      <ListGroupItem>
        <ItemTimeline value={value} />
      </ListGroupItem>
    );
  }
  render() {
    console.log("render", toJS(this.props.posts));
    return (
      <div className="container-fluid">
        <Row>
          <Col sm={{ size: 3.5, offset: 1 }} xs="4">
            <Row style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flex: 1
                }}
                className="mt-3 ml-4"
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
                height: commonColor.deviceHeight - 120,
                overflow: "auto"
              }}
            >
              {this.props.posts.map((value, index) => {
                return this.renderItem(value, index);
              })}
            </div>
          </Col>
          <Col
            style={{
              height: commonColor.deviceHeight,
              overflow: "auto",
              backgroundColor: commonColor.contentBackground
            }}
            sm={{ size: 7 }}
            xs="7"
          >
            <ReactMarkdown source={this.state.input} />
          </Col>
          
          <Blur
            blurRadius={5}
            enableStyles
            style={{
              position: "absolute",
              zIndex: 999,
              right: 0,
              bottom: 0,
              width: "55%"
            }}
          >
            <AnimateHeight
              duration={500}
              height={this.state.height}
              style={{
                marginRight: 10,
                overflow: "auto"
              }}
            >
              <Blur
                blurRadius={5}
                enableStyles
                style={{
                  backgroundColor: commonColor.whitebackground,
                  padding: 10,
                  opacity: 1
                }}
              >
                comment
              </Blur>
              {/* <div
                style={{
                  backgroundColor: commonColor.contentBackground,
                  opacity: 1,
                  display: "flex"
                }}
              >
                <div
                  sm={{ size: 2 }}
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    flex: 2 / 10
                  }}
                >
                  <div
                    style={{
                      backgroundColor: commonColor.commonBackground,
                      height: 50,
                      width: 50,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    M
                  </div>
                </div>
                <div style={{ flex: 8 / 10 }} sm={{ size: 10 }}>
                  {`${"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, excepturi vel pariatur, dolorem sapiente nemo quasi maxime incidunt nobis in natus quaerat consequuntur. Officia incidunt dolores eaque cupiditate rem iste?"}\nLorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, excepturi vel pariatur, dolorem sapiente nemo quasi maxime incidunt nobis in natus quaerat consequuntur. Officia incidunt dolores eaque cupiditate rem iste?`}
                </div>
              </div> */}
              <Comment/>
              <Comment />
              <Comment />
            </AnimateHeight>
            
            <InputGroup>
              <Input
                style={{ height: 70, justifyContent: "center" }}
                placeholder="input"
                onFocus={this.onFocus}
              />
              <InputGroupAddon addonType="append">
                <Button color="secondary">To the Right!</Button>
              </InputGroupAddon>
            </InputGroup>
          </Blur>
        </Row>
      </div>
    );
  }
}

export default AllNew;
