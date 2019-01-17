import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import PropTypes from 'prop-types';
import Todo from "./Todo";
import TodoListModel from "../models/TodoListModel";


@inject("todoStore")
@observer
class TodoList extends Component {
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

TodoList.propTypes = {
  todoStore: PropTypes.object
};

export default TodoList;
