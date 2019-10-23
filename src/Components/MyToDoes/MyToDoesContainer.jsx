import React from 'react';
import '../../App.css';
import {
    acceptUpdatesActionCreator,
    addTodoActionCreator,
    deleteTodoActionCreator,
    putTextInInputActionCreator,
    todoIsDoneActionCreator,
    updateTodoTextActionCreator,
    setTodoAC
} from "../../redux/todo-reducer";
import MyToDoes from "./MyToDoes";
import {connect} from "react-redux";

let mapStateToProps =(state)=>{
    return{
        todo: state.todo,
        newTodoText: state.newTodoText,
        addButtonValue: state.addButtonValue
    }
}

let mapDispatchToProps =(dispatch)=>{
    return{
        putTextInInput: (id) =>{
            dispatch(putTextInInputActionCreator(id));
        },
        deleteTodo: (id) =>{
            dispatch(deleteTodoActionCreator(id));
        },
        todoIsDone: (id)=>{
            dispatch(todoIsDoneActionCreator(id));
        },
        updateNewTodo: (text)=>{
            dispatch(updateTodoTextActionCreator(text));
        },
        acceptUpdates: ()=>{
            dispatch(acceptUpdatesActionCreator());
        },
        addTodo: ()=>{
            dispatch(addTodoActionCreator());
        },
        setTodo: (todo)=>{
            dispatch(setTodoAC(todo));
        }
    }
}

const MyToDoesContainer = connect(mapStateToProps,mapDispatchToProps)(MyToDoes);
export default MyToDoesContainer;