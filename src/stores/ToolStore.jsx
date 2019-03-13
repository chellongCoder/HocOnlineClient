import { observable, action, toJS } from "mobx";

export default class ToolStore {
  static instance = null;
    constructor() {}
    static getInstance() {
        if(this.instance === null) {
            this.instance = new ToolStore();
        }
        return this.instance;
    }

    @observable
    title = "";
    @observable
    lop = "";
    @observable
    typePost = "";
    @observable
    date = "";

    @action
    changeDate(date) {
        this.date = date;
    }

    @action
    changeClass (c) {
        this.lop = c;
    }

    @action
    changeTypePost(type) {
        this.typePost = type;
    }

    @action
    changeTitle(title) {
        this.title = title;
    }

}
