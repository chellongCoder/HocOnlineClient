import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";
import { Provider } from "mobx-react";
import TodoList from "./components/TodoList";
import TodoListModel from "./stores/TodoStore";
import config from './boot/configStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import RootContainer from "./container/RootContainer";
import Setup from "./boot/setup";

const store = TodoListModel.getInstance();
const stores = config();
console.log("stores", {...stores});
render(
  <Setup stores={stores}/>,
  document.getElementById("root")
);

store.addTodo("Get Coffee");
store.addTodo("Write simpler code");
store.todos[0].finished = true;
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8080');
console.log("Socket ", socket);
setTimeout(() => {
  store.addTodo("Get a cookie as well");
}, 2000);

// playing around in the ujconsole
window.store = store;
