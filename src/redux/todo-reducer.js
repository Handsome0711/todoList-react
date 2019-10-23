const ADD_TODO = 'ADD-TODO';
const UPDATE_TODO_TEXT = 'UPDATE-TODO-TEXT';
const DELETE_TODO = 'DELETE-TODO';
const PUT_TEXT_IN_INPUT = 'PUT-TEXT-IN-INPUT';
const EMPTY_ACTION = 'EMPTY-ACTION';
const TODO_IS_DONE = 'TODO-IS-DONE';
const ACCEPT_UPDATES = 'ACCEPT-UPDATES';
const SET_TODOS = 'SET-TODOS';
function todoReducer(state = [], action) {
    //debugger;
    let stateCopy;
    if (action === undefined) action=EMPTY_ACTION;
    switch (action.type) {
        case ADD_TODO:{
            let newTodo = {
                id: state.todo.length + 1,
                message: state.newTodoText,
                isDone: false
            };
            stateCopy = {...state};
            stateCopy.todo =[...state.todo];
            stateCopy.todo.push(newTodo);
            stateCopy.newTodoText = "";
            return stateCopy;
        }
        case UPDATE_TODO_TEXT:{
            stateCopy = {...state};
            stateCopy.newTodoText = action.newText;
            return stateCopy;
        }
        case DELETE_TODO:{
            stateCopy = {
                ...state,
                todo : [...state.todo]
            };
            if (stateCopy.addButtonValue==="Accept" && stateCopy.currentId===action.index){
                stateCopy.newTodoText="";
                stateCopy.addButtonValue = "Add Task";
            }
            if(action.index<stateCopy.currentId) stateCopy.currentId--;
            stateCopy.todo.splice(action.index - 1, 1);
            for (let i = action.index - 1; i < stateCopy.todo.length; i++) {
                stateCopy.todo[i].id--;
            }
            return stateCopy;
        }

        case TODO_IS_DONE:{
            stateCopy = {
                ...state,
                todo : [...state.todo]
            };

            if(stateCopy.todo[action.index-1].isDone === false){
                stateCopy.todo[action.index-1].isDone = true;
            }
            else
                stateCopy.todo[action.index-1].isDone=false;
            debugger;
            return stateCopy;
        }
        case PUT_TEXT_IN_INPUT:{
            stateCopy = {
                ...state,
                todo : [...state.todo]
            };

            stateCopy.currentId = action.index;
            stateCopy.newTodoText=state.todo[action.index-1].message;
            stateCopy.addButtonValue = "Accept";
            return stateCopy;
        }
        case ACCEPT_UPDATES:{
            stateCopy = {
                ...state,
                todo : [...state.todo]
            };
            stateCopy.todo[state.currentId-1].message = state.newTodoText;
            stateCopy.newTodoText="";
            stateCopy.addButtonValue = "Add Task";
            return stateCopy;
        }
        case SET_TODOS: {
            return {...state, users:[...state.todo, ...action.todo]}
        }
        default:
            return state;
    }
}
export const addTodoActionCreator = () => ({type: ADD_TODO});
export const updateTodoTextActionCreator = (text) =>
    ({type: UPDATE_TODO_TEXT, newText: text});
export const deleteTodoActionCreator = (id) =>
    ({type: DELETE_TODO, index: id});
export const todoIsDoneActionCreator = (id) =>
    ({type: TODO_IS_DONE, index:id});
export const putTextInInputActionCreator = (id) =>
    ({type: PUT_TEXT_IN_INPUT, index:id});
export const acceptUpdatesActionCreator = () =>
    ({type: ACCEPT_UPDATES})
export const setTodoAC = (todo)=>({type: SET_TODOS, todo})
export default todoReducer;
