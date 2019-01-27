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
        onSelect={selected => {
          console.log(this.props.path, selected, this.props.history);
          const to = this.props.path + "/" + selected;
          this.props.history.push(to);
          // Add your code here
        }}
      >
        <SideNav.Toggle />
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
              <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="allnew">
              <NavText>All new</NavText>
            </NavItem>
            <NavItem eventKey="allfriend">
              <NavText>All friend</NavText>
            </NavItem>
          </NavItem>
          {/* 
            TODO: documents
        */}
          <NavItem eventKey="documents">
            <NavIcon>
              <img src={allNew} style={navIcon} />
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
              <img src={allNew} style={navIcon} />
            </NavIcon>
            <NavText>TOOLS</NavText>
            <NavItem eventKey="lesson">
              <NavIcon>
                <img src={allNew} style={navSubIcon} />
              </NavIcon>
              <NavText>New post</NavText>
            </NavItem>
          </NavItem>
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
