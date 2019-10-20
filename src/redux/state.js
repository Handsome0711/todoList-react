
let store ={
    _state:{
        todo: [
            {  id: 1, message: "my to-do", isDone: false},
            {  id: 2, message: "my to-do 2", isDone: false}
        ],
        newTodoText: ""
    },
    rerenderEntireTree(){
        console.log("store changed");
    },
    getState(){
        return this._state;
    },
    addTodo (){
        let newTodo = {
            id: 5,
            message: this.getState().newTodoText,
            isDone: false
        };
        this._state.todo.push(newTodo);
        this._state.newTodoText="";
        this.rerenderEntireTree(store);
    },
    updateTodoText(NewText){
        this._state.newTodoText = NewText;
        this.rerenderEntireTree(store);
    },
    subscribe(observer){
        this.rerenderEntireTree = observer;
    }
}
export default store;