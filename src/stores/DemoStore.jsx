import { action, observable, useStrict } from "mobx";


export class DemoStore {
    static instance = null;
    constructor() {}
    static getInstance() {
        if(this.instance === null) {
            this.instance = new DemoStore();
        }
        return this.instance;
    }
}