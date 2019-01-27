import React, { Component } from 'react'
import Home from '../../../pages/Dashboard/Home';
import CommonStyle from '../../../pages/theme/commonStyle';

export default class HomeContainer extends Component {
  render() {
    return (
      <div style={CommonStyle.container}>
        <Home/>
      </div>
    )
  }
}
