import { observable, computed, action } from "mobx";

import TodoModel from "./../models/TodoModel";

export default class TodoListModel {
    @observable todos = [];
    static instance = null;

    constructor() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = this;
    }

    static getInstance() {
        if (this.instance === null) {
            this.instance = new TodoListModel();
        }
        return this.instance;
    }

    @computed
    get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }

    @action
    addTodo(title) {
        this.todos.push(new TodoModel(title));
    }
}
