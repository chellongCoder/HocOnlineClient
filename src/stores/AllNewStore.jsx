import { observable, action, toJS } from "mobx";

export default class AllNewStore {
  static instance = null;
    constructor() {}
    static getInstance() {
        if(this.instance === null) {
            this.instance = new AllNewStore();
        }
        return this.instance;
    }

    @observable
    posts = [];
    @observable
    markdown = "";
    @observable
    idItemClicked = 0;
    @observable
    comments = [];

    @action
    changeComments(comments) {
        console.log("comment", comments);
        this.comments = comments;
    }

    @action
    changeIdItemClicked(id) {
        this.idItemClicked = id;
    }

    @action
    changeContentMarkdown(input) {
        this.markdown = input;
    }

    @action
    changePosts(posts) {
        console.log(posts);
        this.posts = posts;
        console.log(toJS(this.posts));
    }

}
