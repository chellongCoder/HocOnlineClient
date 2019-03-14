import React, { Component } from 'react'
import { Container, Row, Col ,Alert} from 'reactstrap';
import { Header } from '../../../pages/Dashboard/ToolEditor/header';
import commonColor from '../../../pages/theme/commonColor';
import ChoiceClass from '../../../pages/Dashboard/ToolEditor/ChoiceClass';
import './styles.css';
import { Title } from '../../../pages/Dashboard/ToolEditor/Title';
import EditorComponent from '../../../pages/Dashboard/ToolEditor/Editor';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import UploadService from '../../../services/UploadService';
import { inject, observer } from 'mobx-react';
import jwt from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';
import WebConfig from '../../../boot/WebConfig';
import PostsService from '../../../services/PostsService';
import { toJS } from 'mobx';

@inject("toolStore")
@inject("allNewStore")
@observer
export default class ToolEditorContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      file : null,
      validate : false
    }
    
    this.upload = this.upload.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeClass = this.onChangeClass.bind(this);
    this.onChangeTypePost = this.onChangeTypePost.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
  }
  
  async upload () {
    
    let {title, lop, typePost, date} = this.props.toolStore;
    if(title!=="" || lop!=="" || typePost!=="" || date!=="" ) {
      this.setState({validate : true});
    }
    let decoded = jwt_decode(localStorage.getItem('token'));
    console.log(title, lop, typePost, date, decoded.Id);
    let postId = await UploadService.upload(title, lop, typePost, date, decoded.Id);
    let file = await UploadService.uploadMarkDownFile(this.state.file);
    let data = await UploadService.insertData(title, postId, `${WebConfig.SERVER}/${file.link}`);
    let post = await PostsService.getPostByPostId(postId);
    post.user_name = decoded.userName;
    console.log("post", post, "decode", decoded);
    let posts = toJS(this.props.allNewStore.posts);
    console.log("posts", posts);
    posts.unshift(post);
    this.props.allNewStore.changePosts(posts);
    this.props.history.push("allnew")
  }

  onChangeTitle (event) { 
    console.log(event.target.value); 
    const title = event.target.value;
    this.props.toolStore.changeTitle(title);
  }

  onChangeClass(c) {
    console.log("class", c);
    this.props.toolStore.changeClass(c);
  }
  onChangeTypePost(typePost) {
    console.log("class", typePost);
    this.props.toolStore.changeTypePost(typePost);
  }
  onChangeDate(date) {
    this.props.toolStore.changeDate(date);
  }

  render() {
    
    return (
      <div style={{width : commonColor.deviceWidth*(8/10), float : 'right' , margin : 0, padding : 0}}>
        <Row style={{marginLeft: 0, marginRight: 0,}}>
          <Col >
          {this.state.validate ? <Alert color="danger">All field should be not empty</Alert> : null}
            <Header upload={this.upload} />

            <div
              style={{
                height: 80
              }}
            >
              <FilePond
                onupdatefiles={fileItems => {
                  console.log("file item", fileItems[0].file);
                  // Set currently active file objects to this.state
                  this.setState({
                    file: fileItems[0].file
                  });
                  console.log(this.state.file.name);
                }}
                onload={(response) => {
                  console.log("response" , response);
                }}
                maxFiles={1}
                instantUpload={false}
                // server={`http://localhost:8080/api/ext/upload?dir=upload/markdown`}
                allowMultiple={true}
              />
            </div>

            <div
              style={{
                background: commonColor.contentBackground
              }}
            >
              <Title onChangeTitle={this.onChangeTitle} />
              <ChoiceClass
                onChangeClass={this.onChangeClass}
                onChangeTypePost={this.onChangeTypePost}
                onChangeDate={this.onChangeDate}
              />
              <EditorComponent />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}