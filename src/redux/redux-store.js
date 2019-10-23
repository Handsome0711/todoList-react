import {combineReducers, createStore} from "redux";
import todoReducer from "./todo-reducer";



// let reducers = combineReducers({
//     todoReducer
// })
let initialState = {
    todo: [
        {id: 1, message: "my to-do", isDone: false},
        {id: 2, message: "my to-do 2", isDone: false}
    ],
    newTodoText: "",
    mode : "default",
    addButtonValue: "Add Task",
    currentId: null
};

let store = createStore(todoReducer, initialState);

export default store;