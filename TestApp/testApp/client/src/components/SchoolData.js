import React from 'react'

const SchoolData = (props) => {

    return (
        <div style={props.style}>
            <h1>School Data</h1>
            <label>Please select your school:</label>
            <select>
                {props.school.schools.map((el)=>{
                    return (
                    <option key={el.id}>{el.schoolName}</option>
                    )
                })}
            </select>
            <div>
                <label>Please select your education level:</label>
            <select>
                {props.school.schools.map((el)=>{
                    return (
                    <option key={el.id}>{el.level}</option>
                    )
                })}
            </select></div>
            
        </div>
    )
}

export default SchoolData
