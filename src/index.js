import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import { Provider } from "mobx-react";
import TodoList from "./components/TodoList";
import TodoListModel from "./stores/TodoStore";
import config from './boot/configStore';
import Main from './pages/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = TodoListModel.getInstance();
const stores = config();
console.log("stores", {...stores});
render(
  <div>
    <DevTools />
    <Provider {...stores}>
    {/* <TodoList /> */}
    <Main/>
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
