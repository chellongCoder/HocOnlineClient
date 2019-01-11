import { DemoStore } from "./DemoStore";
import TodoListModel from "../models/TodoListModel";


export default class RootStore {
    constructor() {
        this.userStore = DemoStore.getInstance();
        this.todoStore = TodoListModel.getInstance();
    }
}
