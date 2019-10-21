
let store ={
    _state:{
        todo: [
            {  id: 1, message: "my to-do", isDone: false},
            {  id: 2, message: "my to-do 2", isDone: false}
        ],
        newTodoText: "",
        mode : "",
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
    addNewTodo (){
        let newTodo = {
            id: this.getState().todo.length+1,
            message: this.getState().newTodoText,
            isDone: false
        };
        this._state.todo.push(newTodo);
        this._state.newTodoText="";
        this.defaultMode();
        this.rerenderEntireTree(store);
    },
    updateTodoText(NewText){
        this._state.newTodoText = NewText;
        this.rerenderEntireTree(store);
    },
    deleteTodo(index){
        this._state.todo.splice(index-1,1);
        this.rerenderEntireTree(store);
        for(let i=index-1; i<this._state.todo.length; i++){
            this._state.todo[i].id--;
        }
    },
    isTaskDone(check, index){
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
        debugger;
        this._state.todo[this.getState().currentId-1].message = this.getState().newTodoText;
        this._state.newTodoText="";
        this._state.mode = "default";
        this._state.addButtonValue = "Add Task";
        this.rerenderEntireTree(store);
    },
    setCurrentId(index){
        this._state.currentId = index;
    },


}
export default store;