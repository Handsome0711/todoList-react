
import React from 'react';
import './App.css';
import MyToDoes from "./Components/MyToDoes/MyToDoes";
import MyToDoesContainer from "./Components/MyToDoes/MyToDoesContainer";


function App(props) {
    return (
        <div>
            <MyToDoesContainer store={props.store}/>
        </div>
    );
}

export default App;