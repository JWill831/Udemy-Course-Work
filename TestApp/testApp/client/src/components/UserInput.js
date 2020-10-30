import React from 'react';
import './UserStyle.css';


export const UserInput = (props) => {
    return (
        <div style = {props.style} className="StyleSheet">
            <p>UserInput here: <input onChange={props.change} name="name" type="text" value={props.name}></input></p>
        </div>
    )
}

export default UserInput;