import React from 'react';
import ToDo from "./ToDo/ToDo";
import '../../App.css';
import * as axios from 'axios';
const URL = 'http://5da3023676c28f0014bbe66c.mockapi.io/todo/'
const MyToDoes = (props) =>{


    let todoElements = props.todo.map( t => <ToDo message={t.message}
                                                  id={t.id}
                                                  isDone={t.isDone}
                                                  todoIsDone={props.todoIsDone}
                                                  todo={props.todo}
                                                  deleteTodo={props.deleteTodo}
                                                  putTextInInput={props.putTextInInput}
                                                    />);

    let newTodoElement = React.createRef();

    let onAddPost =() =>{
        props.addTodo();
    }
    let onAcceptUpdates = () =>{
        props.acceptUpdates();
    }
    let chooseAction = () => {
        if (props.addButtonValue==="Accept"){
            onAcceptUpdates();
        }
        else{
            onAddPost();
        }
    }
    let onTodoChange = () => {
        let text = newTodoElement.current.value;
        props.updateNewTodo(text);
    }


    return(
        <div>
            <h1>ToDoList</h1>
            <div>
                <input className="new-task" onChange={onTodoChange} type="text" ref={newTodoElement} value={props.newTodoText}/>
                <button className="add-button" onClick={chooseAction}>{props.addButtonValue}</button>
            </div>

            <ul className="tasks">
                {todoElements}
            </ul>
        </div>
    )
}
export default MyToDoes;