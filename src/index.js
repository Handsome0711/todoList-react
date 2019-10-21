
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/store";

let rerenderEntireTree = (store) =>{
    debugger
    ReactDOM.render(<App state={store.getState()} store={store}/>,
        document.getElementById('root'));
}
rerenderEntireTree(store);
store.subscribe(rerenderEntireTree);
serviceWorker.unregister();