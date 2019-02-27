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

    @action
    changePosts(post) {
        console.log(post);
        this.posts = post;
        console.log(toJS(this.posts));
    }

}
