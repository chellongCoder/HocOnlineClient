import React, { Component } from 'react'
import CommonStyle from '../../../pages/theme/commonStyle';
import AllNew from '../../../pages/Dashboard/AllNew';

export default class AllNewContainer extends Component {
  render() {
    return (
      <div style={CommonStyle.container}>
        <AllNew/>
      </div>
    )
  }
}
