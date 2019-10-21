import React from 'react';
import '../../../App.css';

const ToDo = (props) =>{
    let isDone = () => {
        let check=false;
        if(props.store.getState().todo[props.id-1].isDone === true )
            check=false;
        else check=true;
        props.store.isTaskDone(check, props.id);
    }
    let setClassName = () =>{
        if(props.store.getState().todo[props.id-1].isDone){
            return "done";
        }
        else return "not-done";
    }
    let deleteTodo = () =>{
        props.store.deleteTodo(props.id);
    }
    let putTextInInput=()=>{
        props.store.putTextInInput(props.id);
        console.log(props.store.getState().mode);
        props.store.setCurrentId(props.id);
    }
    return(
        <li>
            <button className="edit-button" onClick={putTextInInput}>edit</button>
            <label onClick={isDone} className={setClassName()}>
                {props.message}

            </label>
            <button onClick={deleteTodo} className="delete-button">X</button>
        </li>
    )
}
export default ToDo;