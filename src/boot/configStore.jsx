import { create, persist } from "mobx-persist";
import { DemoStore } from "../stores/DemoStore";
import TodoListModel from "../stores/TodoStore";
import AllNewStore from "../stores/AllNewStore";
import PropTypes from 'prop-types';


export default function () {
    const hydrate = create({
        storage: "localForage", // or AsyncStorage in react-native.
        // default: localStorage
        jsonify: true // if you use AsyncStorage, here shoud be true
        // default: true
    });
    
    const demoStore = DemoStore.getInstance();
    const todoStore = TodoListModel.getInstance();
    const allNewStore = AllNewStore.getInstance();
    return {
        demoStore,
        todoStore,
        allNewStore
    }
}