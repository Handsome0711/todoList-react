const ADD_TODO = 'ADD-TODO';
const UPDATE_TODO_TEXT = 'UPDATE-TODO-TEXT';
const DELETE_TODO = 'DELETE-TODO';
const PUT_TEXT_IN_INPUT = 'PUT-TEXT-IN-INPUT';
const EMPTY_ACTION = 'EMPTY-ACTION';
let initialState = {
    todo: [
        {id: 1, message: "my to-do", isDone: false},
        {id: 2, message: "my to-do 2", isDone: false}
    ],
    newTodoText: ""
};
const todoReducer = (state = initialState, action) => {
    if (action === undefined) action=EMPTY_ACTION;
    switch (action.type) {

        case ADD_TODO:{
            let newTodo = {
                id: this.getState().todo.length + 1,
                message: this.getState().newTodoText,
                isDone: false
            };
            state.todo.push(newTodo);
            state.newTodoText = "";
            return state;
        }
        case UPDATE_TODO_TEXT:{
            state.newTodoText = action.NewText;
            return state;
        }
        case DELETE_TODO:{
            state.todo.splice(action.index - 1, 1);
            for (let i = action.index - 1; i < state.todo.length; i++) {
                state.todo[i].id--;
            }
            return state;
        }
        case PUT_TEXT_IN_INPUT:{
            state.newTodoText = state.todo[action.index - 1].message;
            return state;
        }
        default:
            debugger;
            return state;
    }
}
export const addTodoActionCreator = () => ({type: ADD_TODO});
export const updateTodoTextActionCreator = (text) =>
    ({type: UPDATE_TODO_TEXT, newText: text})
export default todoReducer();
