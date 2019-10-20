import React from 'react';

const ToDo = (props) =>{
    return(
        <li>
            <label>
                {props.message}
            </label>
            <button>X</button>
        </li>
    )
}
export default ToDo;