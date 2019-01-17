import React, { Component } from 'react'
import config from './configStore';
import TodoList from "./../components/TodoList";
import { Provider } from "mobx-react";
import DevTools from "mobx-react-devtools";
import 'bootstrap/dist/css/bootstrap.min.css';
import RootContainer from "./../container/RootContainer";
import PropTypes from "prop-types";

export default class Setup extends Component {
  render() {
    return (
        <div>
            <DevTools />
            <Provider {...this.props.stores}>
                {/* <TodoList /> */}
                <RootContainer />
            </Provider>
        </div>
    )
  }
}

Setup.propTypes = {
    stores : PropTypes.object
}
