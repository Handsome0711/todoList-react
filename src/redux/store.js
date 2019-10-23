const ADD_TODO = 'ADD-TODO';
const UPDATE_TODO_TEXT = 'UPDATE-TODO-TEXT';
let store ={
    _state:{
        todo: [
            {  id: 1, message: "my to-do", isDone: false},
            {  id: 2, message: "my to-do 2", isDone: false}
        ],
        newTodoText: "",
        mode : "default",
        addButtonValue: "Add Task",
        currentId: 3
},
    subscribe(observer){
        this.rerenderEntireTree = observer;
    },
    rerenderEntireTree(){
        console.log("store changed");
    },
    getState(){
        return this._state;
    },


    deleteTodo(index){
        this._state.todo.splice(index-1,1);
        this.rerenderEntireTree(store);
        for(let i=index-1; i<this._state.todo.length; i++){
            this._state.todo[i].id--;
        }
    },
    todoIsDone(check, index){
        this._state.todo[index-1].isDone = check;
        this.rerenderEntireTree(store);
    },
    putTextInInput(index){
        this.redactMode();
        this._state.newTodoText = this.getState().todo[index-1].message;
        this.rerenderEntireTree(store);
    },
    redactMode(){
        this._state.mode = "redact";
        this._state.addButtonValue = "Accept";

    },
    defaultMode(){
        this._state.todo[this.getState().currentId-1].message = this.getState().newTodoText;
        this._state.newTodoText="";
        this._state.mode = "default";
        this._state.addButtonValue = "Add Task";
        this.rerenderEntireTree(store);
    },
    setCurrentId(index){
        this._state.currentId = index;
    },
    dispatch(action){
        switch (action.type) {
            case ADD_TODO:{
                let newTodo = {
                    id: this.getState().todo.length+1,
                    message: this.getState().newTodoText,
                    isDone: false
                };
                this._state.todo.push(newTodo);
                //this._state.mode = "default";
                this._state.newTodoText="";
                this.rerenderEntireTree(store);
                break;
            }
            case UPDATE_TODO_TEXT:{
                debugger;
                this._state.newTodoText = action.newText;
                this.rerenderEntireTree(store);
                break;
            }
        }
    },
}
// export let addTodoActionCreator = () => {
//
//     return {
//         type: ADD_TODO
//     }
// }
// export let updateTodoTextActionCreator = (text) =>{
//     return{
//         type: UPDATE_TODO_TEXT, newText: text
//     }
// }
export default store;