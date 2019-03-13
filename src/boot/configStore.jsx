import { create, persist } from "mobx-persist";
import { DemoStore } from "../stores/DemoStore";
import TodoListModel from "../stores/TodoStore";
import AllNewStore from "../stores/AllNewStore";
import PropTypes from 'prop-types';
import UserStore from "../stores/UserStore";
import ToolStore from "../stores/ToolStore";


export default function () {
    const hydrate = create({
        // default: localStorage
        jsonify: false // if you use AsyncStorage, here shoud be true
        // default: true
    });
    
    const demoStore = DemoStore.getInstance();
    const todoStore = TodoListModel.getInstance();
    const allNewStore = AllNewStore.getInstance();
    const userStore = UserStore.getInstance();
    const toolStore = ToolStore.getInstance();
    hydrate('userStore', userStore).then(() => {
        console.log(userStore.authenToken);
        console.log('userStore has been hydrated');
    })
    return {
      demoStore,
      todoStore,
      allNewStore,
      userStore,
      toolStore
    };
}