import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import { Provider } from "mobx-react";
import TodoList from "./components/TodoList";
import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";
import config from './boot/configStore';
import RootStore from "./stores/RootStore";
const store = TodoListModel.getInstance();
const stores = config();
console.log("stores", {...stores});
render(
  <div>
    <DevTools />
    <Provider {...stores}>
    <TodoList />
    </Provider>
  </div>,
  document.getElementById("root")
);

store.addTodo("Get Coffee");
store.addTodo("Write simpler code");
store.todos[0].finished = true;

setTimeout(() => {
  store.addTodo("Get a cookie as well");
}, 2000);

// playing around in the console
window.store = store;
