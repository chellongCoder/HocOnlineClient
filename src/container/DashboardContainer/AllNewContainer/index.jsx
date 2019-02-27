import React, { Component } from 'react'
import CommonStyle from '../../../pages/theme/commonStyle';
import AllNew from '../../../pages/Dashboard/AllNew';
import PostsService from './../../../services/PostsService';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import AllNewStore from '../../../stores/AllNewStore';
import { toJS } from 'mobx';

@inject("allNewStore")
@observer
class AllNewContainer extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    let posts = await PostsService.getPost(1, 10);
    console.log(posts);
    // posts.forEach(element => {
    //   // await 
    // });
    this.props.allNewStore.changePosts(posts);
  }
  render() {
    
    return (
      <div style={CommonStyle.container}>
        <AllNew posts={this.props.allNewStore.posts}/>
      </div>
    )
  }
}

AllNewContainer.propTypes = {
  allNewStore : AllNewStore
}

export default AllNewContainer;