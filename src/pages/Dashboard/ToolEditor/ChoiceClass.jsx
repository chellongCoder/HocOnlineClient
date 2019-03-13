import React, { Component } from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import "react-datepicker/dist/react-datepicker.css";
import { Title } from "./Title";
import DropdownComponent from "../../../components/DropdownComponent";
import DatePicker from "react-datepicker";
import UploadService from "../../../services/UploadService";
import { getDayPost } from "../../../boot/commons";
const classes = {
  title : "Choice Class",
  data: [
    "C", "Java", "linux"
  ]
}
const type_post = {
  title : "Choice Type post", 
  data: [
    "Lesson", "Lab"
  ]
}
export default class ChoiceClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      classData: {
        title: "Choice Class",
        data: [
          "C", "Java", "linux"
        ]
      },
      typePost: {
        title: "Choice Type post",
        data: [
          "Lesson", "Lab"
        ]
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
    let day = getDayPost(date);
    this.props.onChangeDate(day);
  }

  async componentDidMount() {
    let classData = await UploadService.getClass(1, 10);
    let typePost = await UploadService.getTypePost(1, 10);
    this.props.onChangeDate(getDayPost(new Date()));
    console.log("class Data", classData);
    let data = {
      title: "Choice Class",
      data: classData
    }
    let type = {
      title: "Choice Type post",
      data: typePost
    };
    this.setState({ classData: data, typePost: type});
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <DropdownComponent
            changeData={this.props.onChangeClass}
            data={this.state.classData}
          />
        </div>
        <div style={{ flex: 1 }}>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </div>
        <div style={{ flex: 1 }}>
          <DropdownComponent
            changeData={this.props.onChangeTypePost}
            data={this.state.typePost}
          />
        </div>
      </div>
    );
  }
}
