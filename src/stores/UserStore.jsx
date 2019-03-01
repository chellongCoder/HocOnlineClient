import { observable, action } from "mobx";
import { persist } from "mobx-persist";

export default class UserStore {
    static instance = null;
    constructor() { }
    static getInstance() {
        if (this.instance === null) {
            this.instance = new UserStore();
        }
        return this.instance;
    }
    
    @persist
    @observable
    authenToken = "";

    @observable
    username="";

    @observable
    password = "";

    @action
    changeUsername(username) {
        this.username = username;
    }

    @action
    changePassword(pass) {
        this.password = pass;
    }

    @action
    changeAuthenToken (token) {
        this.authenToken = token;
    }
}