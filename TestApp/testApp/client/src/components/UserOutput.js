import React from 'react'

export const UserOutput = (props) => {
    return (
        <div className="StyleSheet"  style={props.style} onClick={()=>props.click(props.index)}>
            <p> My name is {props.userName}</p>
            <p> I am {props.age}</p>
        </div>
    )
}

export default UserOutput;