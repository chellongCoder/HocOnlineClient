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

} from "reactstrap";
import PropTypes from 'prop-types';
import './css/index.css';
import image from './../assets/images/faces/image.png';
import studenttype from "./../assets/images/icon/student-type.png";
import CommonStyle from "../pages/theme/commonStyle";
import commonColor from "../pages/theme/commonColor";
import { toJS } from "mobx";
import { dateFormat2, dayBetween } from "../boot/commons";
export default class ItemTimeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSeeMore : false,
    }
    this.handleSeeMore =  this.handleSeeMore.bind(this);
  }
  handleSeeMore() {
    this.setState({isSeeMore : true})
  }
  render() {
    console.log("value", toJS(this.props.value));
    return (
        <Row style={{ display: "flex"}} >
          <div style={{ flex: 1 / 10 }} >
            <img className="avatar-item" src={image} style={CommonStyle.imageNormal}/>
          </div>
          <div style={{ flex: 9 / 10 }} className=" right-item">
            <div style={{ display: "flex" }}>
              <div style={{ flex: 3 / 10 , fontSize : commonColor.fontSizeH3}}>{this.props.value.user_name}</div>
              <div style={{ flex: 7 / 10, display : 'flex', justifyContent : 'flex-end' , alignItems : 'center'}}>
                <img className="mr-1" style={CommonStyle.imageSmall} src={studenttype} alt="#"/>
                student
              </div>
            </div>
            {
            !this.state.isSeeMore ?
            <div >
                {this.props.value.Content} <div onClick={this.handleSeeMore} style={{ color: commonColor.commonBackground, cursor: "pointer"}}>see more...</div>
            </div> :
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Maxime adipisci, exercitationem voluptatibus cumque officia
              repudiandae. Eum fugiat cumque magnam nihil modi, ipsa
              praesentium accusamus odit harum. Facilis nostrum cupiditate
              molestias.
            </div>
            }
            <div style={CommonStyle.textNote}>
            Check in: <span className="time-post">{dateFormat2(new Date(this.props.value.Created))}</span> — {dayBetween(new Date(), new Date(this.props.value.Created))} days ago
            </div>
          </div>
        </Row>
    );
  }
}

// ItemTimeline.propTypes = {
//   name : PropTypes.string,
//   type : PropTypes.string,
//   checkinTime : PropTypes.number,
//   content : PropTypes.string,
// }