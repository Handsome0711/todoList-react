import React from 'react';
import '../../../App.css';

let className = "";

const ToDo = (props) =>{

    let onTodoIsDone = () => {
        props.todoIsDone(props.id);
    }
    let setClassName = () =>{
        if(props.todo[props.id-1].isDone === true){
            return"done";
        }
        else {
            return "not-done";
        }
    }
    let onDeleteTodo = () =>{
        props.deleteTodo(props.id)
    }
    let onPutTextInInput=()=>{
        props.putTextInInput(props.id);
    }
    return(
        <li>
            <button className="edit-button" onClick={onPutTextInInput}>edit</button>
            <label onClick={onTodoIsDone} className={setClassName()}>
                {props.message}
            </label>
            <button onClick={onDeleteTodo} className="delete-button">X</button>
        </li>
    )
}
export default ToDo;