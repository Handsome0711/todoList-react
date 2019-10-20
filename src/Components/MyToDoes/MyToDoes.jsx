import React from 'react';
import ToDo from "./ToDo/ToDo";
//import {addTodo} from "../../redux/state";

const MyToDoes = (props) =>{
    debugger;
    let todoElements = props.state.todo.map( t => <ToDo message={t.message}/>);

    let newTodoElement = React.createRef();

    let addPost =() =>{
        props.store.addTodo();
    }
    let onTodoChange = () => {
        let text = newTodoElement.current.value;
        props.store.updateTodoText(text);
    }
    return(
        <div>
            <h1>ToDoList</h1>
            <div>
                <input onChange={onTodoChange} type="text" ref={newTodoElement} value={props.store.getState().newTodoText}/>
                <button onClick={addPost}>Add Task</button>
            </div>
            <ul>
                {todoElements}
            </ul>
        </div>
    )
}
export default MyToDoes;