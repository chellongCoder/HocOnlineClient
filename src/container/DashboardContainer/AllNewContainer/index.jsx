import React, { Component } from 'react'
import CommonStyle from '../../../pages/theme/commonStyle';
import AllNew from '../../../pages/Dashboard/AllNew/AllNew';
import PostsService from './../../../services/PostsService';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import AllNewStore from '../../../stores/AllNewStore';
import { toJS } from 'mobx';
import CommentServices from '../../../services/CommentServices';

@inject("allNewStore")
@observer
class AllNewContainer extends Component {
  constructor(props) {
    super(props);
    this.clickItem = this.clickItem.bind(this);
    this.loadPage = this.loadPage.bind(this);
    this.loadComment = this.loadComment.bind(this);
  }
  async componentDidMount() {
    let posts = toJS(this.props.allNewStore.posts);
    if (posts.length === 0) {
      posts = await PostsService.getPost(1, 10);
      this.props.allNewStore.changePosts(posts);
    }
    console.log(posts);
    // fetch("./../../../demo.md")
    //   .then(response => response.text())
    //   .then(text => {
    //     this.props.allNewStore.changeContentMarkdown(text);
    //   });
    // posts.forEach(element => {
    //   // await
    // });
    this.clickItem(this.props.allNewStore.posts[0].id);
  }
  async loadComment() {
    let postId = this.props.allNewStore.idItemClicked;
    let comments = await CommentServices.getCommentByPostId(postId, 1 ,10);
    this.props.allNewStore.changeComments(comments);
  }
  async loadPage(value) {
    console.log(value);
    let data = await PostsService.getPost(value, 10);
    console.log("data", data);
    this.props.allNewStore.changePosts(data);
  }
  async clickItem(postId) {
    console.log("click", postId);
    let data = await PostsService.getDataByPostId(postId);
    console.log("data", data);
    this.props.allNewStore.changeIdItemClicked(postId);
    this.props.allNewStore.changeContentMarkdown(data);
  }
  render() {
    return (
      <div style={CommonStyle.container}>
        <AllNew
          comments={this.props.allNewStore.comments}
          loadComment={this.loadComment}
          loadPage={this.loadPage}
          clickItem={this.clickItem}
          markdownContent={this.props.allNewStore.markdown}
          posts={this.props.allNewStore.posts}
        />
      </div>
    );
  }
}

AllNewContainer.propTypes = {
  allNewStore : AllNewStore
}

export default AllNewContainer;