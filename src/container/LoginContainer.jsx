import React, { Component } from 'react'
import Login from '../pages/Login';
import LoginService from '../services/LoginService';
import UserStore from '../stores/UserStore';
import { inject, observer } from 'mobx-react';
import { Link, withRouter } from "react-router-dom";

@inject("userStore")
@observer
class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.username = "";
    this.password = "";
    this.handleLogin = this.handleLogin.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }
  componentDidMount() {
    console.log("will mount", this.props.userStore);
  }
  async handleLogin() {
    const data = await LoginService.authenService(this.props.userStore.username, this.props.userStore.password).catch(() => {
      console.log("cathc");
      this.props.userStore.changeErrorLogin("error");
      return;
    });
    console.log("data", data);
    localStorage.setItem('token',data.token);
    this.props.history.push("/dashboard");
    // UserStore.getInstance().changeAuthenToken(data.token);
  }
  onClick() {
    console.log("ok");
    console.log("key ", sessionStorage.getItem('key'));
    console.log("key ", localStorage.getItem('token'));
    this.props.userStore.changeAuthenToken(localStorage.getItem('token'));
    
  }
  onChangeUserName(event) {
    console.log("event", event.target.value);
    this.props.userStore.changeUsername(event.target.value);
    // this.username = event.target.value;
  }
  onChangePassword(event) {
    this.props.userStore.changePassword(event.target.value);
  }
  render() {
    console.log("token ", this.props.userStore.authenToken);
    return (
      <Login
        errorLogin={this.props.userStore.errorLogin}
        onChangePassword={this.onChangePassword}
        onChangeUserName={this.onChangeUserName}
        onClick={this.onClick}
        handleLogin={this.handleLogin}
      />
    )
  }
}

LoginContainer.propTypes = {
  userStore: UserStore
}

export default withRouter(LoginContainer);
