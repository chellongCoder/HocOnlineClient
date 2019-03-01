import React, { Component } from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";
import home from "./../../assets/images/icon/home.png";
import allNew from "./../../assets/images/icon/allNew.png";
import documents from "./../../assets/images/icon/documents.png";
import tools from "./../../assets/images/icon/tools.png";
import friend from "./../../assets/images/icon/friend.png";
import "./style.css"
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import HomeContainer from "../../container/DashboardContainer/HomeContainer";
import PropTypes from "prop-types";
import CommonStyle from "../../pages/theme/commonStyle";
import commonColor from "../../pages/theme/commonColor";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  navIcon: {
    float: "left",
    backgroundColor: "black"
  }
});
const navIcon = {
  width: commonColor.iconSizeMedium,
  textAlign: "center",
  marginTop: 15
};
const navSubIcon = {
  float: "left",
  width: commonColor.iconSizeMedium,
  marginTop: 5,
  marginLeft: 30,
  marginRight: 10
};
class Sidebar extends Component {
  render() {
    console.log("path ", this.props.path);
    const { classes } = this.props;
    return (
      <SideNav
        style={{ background: 'blue', minWidth: '14%',}}
        expanded={true}
        onSelect={selected => {
          console.log(this.props.path, selected, this.props.history);
          const to = this.props.path + "/" + selected;
          this.props.history.push(to);
          // Add your code here
        }}
      >
        {/* <SideNav.Toggle /> */}
        {/* 
            TODO: @render new feed 
        */}
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <img src={home} style={navIcon} />
            </NavIcon>
            <NavText>NEW FEED</NavText>
            <NavItem eventKey="home">
              <NavIcon>
                <img src={home} style={navSubIcon} />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="timeline">
              <NavIcon>
                <img src={home} style={navSubIcon} />
              </NavIcon>
              <NavText>My Timeline</NavText>
            </NavItem>
            <NavItem eventKey="allnew">
              <NavIcon>
                <img src={allNew} style={navSubIcon} />
              </NavIcon>
              <NavText>All new</NavText>
            </NavItem>
            <NavItem eventKey="allfriend">
              <NavIcon>
                <img src={friend} style={navSubIcon} />
              </NavIcon>
              <NavText>All friend</NavText>
            </NavItem>
          </NavItem>
          {/* 
            TODO: documents
        */}
          <NavItem eventKey="documents">
            <NavIcon>
              <img src={documents} style={navIcon} />
            </NavIcon>
            <NavText>DOCUMENTS</NavText>
            <NavItem eventKey="lesson">
              <NavIcon>
                <img src={allNew} style={navSubIcon} />
              </NavIcon>
              <NavText>Lesson</NavText>
            </NavItem>
            <NavItem eventKey="video">
              <NavIcon>
                <img src={allNew} style={navSubIcon} />
              </NavIcon>
              <NavText>Video</NavText>
            </NavItem>
            <NavItem eventKey="file">
              <NavIcon>
                <img src={allNew} style={navSubIcon} />
              </NavIcon>
              <NavText>all file</NavText>
            </NavItem>
          </NavItem>
          {/* 
            Tool
        */}
          <NavItem eventKey="tools">
            <NavIcon>
              <img src={tools} style={navIcon} />
            </NavIcon>
            <NavText>TOOLS</NavText>
            <NavItem eventKey="lesson">
              <NavIcon>
                <img src={allNew} style={navSubIcon} />
              </NavIcon>
              <NavText>New post</NavText>
            </NavItem>
          </NavItem>
          
      
            <Link onClick={() => {
              localStorage.clear();
            }} style={{textDecoration : "none", position : 'absolute', bottom : 0}} to="/login">Logout</Link>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

Sidebar.propTypes = {
  path: PropTypes.string,
  classes: PropTypes.object
};
export default withRouter(withStyles(styles)(Sidebar));
