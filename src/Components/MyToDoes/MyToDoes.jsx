import React from 'react';
import ToDo from "./ToDo/ToDo";
import '../../App.css';


const MyToDoes = (props) =>{
    let todoElements = props.state.todo.map( t => <ToDo message={t.message} id={t.id} store={props.store}/>);

    let newTodoElement = React.createRef();

    let addPost =() =>{
        props.store.addNewTodo();
    }
    let acceptUpdates = () =>{
        debugger;
        props.store.defaultMode();

    }
    // let saveUpdates = () =>{
    //     props.store.saveUpdate(props.id);
    // }
    let chooseAction = () => {
        if (props.store.getState().mode === "redact"){
            acceptUpdates();
        }
        else{
            addPost();
        }


    }
    let onTodoChange = () => {
        let text = newTodoElement.current.value;
        props.store.updateTodoText(text);
    }
    let getAddButtonValue= () =>{
        return props.store.getState().addButtonValue;
        debugger;
    }

    return(
        <div>
            <h1>ToDoList</h1>
            <div>
                <input className="new-task" onChange={onTodoChange} type="text" ref={newTodoElement} value={props.state.newTodoText}/>
                <button className="add-button" onClick={chooseAction}>{getAddButtonValue()}</button>
            </div>
            <ul className="tasks">
                {todoElements}
            </ul>
        </div>
    )
}
export default MyToDoes;