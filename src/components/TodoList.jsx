import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";

import Todo from "./Todo";
import TodoListModel from "../models/TodoListModel";
interface Props {
  todoStore: TodoListModel;
}
@inject("todoStore")
@observer
class TodoList extends Component<Props> {
  @observable newTodoTitle = "";

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          New Todo:
          <input
            type="text"
            value={this.newTodoTitle}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add</button>
        </form>
        <hr />
        <ul>
          {
            this.props.todoStore.todos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {this.props.todoStore.unfinishedTodoCount}
      </div>
    );
  }

  @action
  handleInputChange = e => {
    console.log("todoStore ", this.props.todoStore);
    this.newTodoTitle = e.target.value;
  };

  @action
  handleFormSubmit = e => {
    this.props.todoStore.addTodo(this.newTodoTitle);
    this.newTodoTitle = "";
    e.preventDefault();
  };
}

export default TodoList;
