import React, { useState } from 'react';

import './App.css';
import SchoolData from './components/SchoolData';
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";



function App(props) {
  const [state, setState] = useState({
    persons: [
      { id: 1, userName: "Max", age: 28},
      { id: 2, userName: "Tony", age: 26 },
      { id: 3, userName: "Barbonie", age: 22 },
    ],
    showPerson: false,
  });

  const [schoolState, setSchoolState] = useState({
    schools:[
      {id:1, schoolName: "Cabrillo" , level: "AA" },
      {id:2, schoolName: "SJSU", level: "BS"},
      {id:3, schoolName: "UCSC", level: "BA"},
      {id:4, schoolName: "CAL POLY", level: "MASTERS"},
    ]

  });




  const onChangeHanlder = (e) => {
    const temp = state.showPerson;
    setState({
      persons: [
      { id: 1, userName: "Max", age: 28},
      { id: 2, userName: e.target.value, age: 26 },
      { id: 3, userName: "Barbonie", age: 22 },
      ],
      showPerson: temp,
    })
    
  };
  console.log("state", state.persons)
  const style = {
    backgroundColor: 'gray',
    border: '1px solid black',
    padding: '8px',
    cursor: 'pointer',
    width: '700px',
    margin: 'auto',
  };
  const deleteHandler = (personIndex) => {
    const persons = [...state.persons];
    persons.splice(personIndex, 1);
    setState({...state, persons:persons});
    console.log("deleteHandler")  
  }
  console.log(state)
  const toggleHandler = () => {
    const doesShow = state.showPerson;
    const persons = [...state.persons];
    setState(
      {
        persons: persons,
        showPerson: !doesShow
      });
    console.log("toggle", state.showPerson)
  };

  

  let content = null;
  
  if (state.showPerson === false) {
    content =
      <div>
        {state.persons.map((person, index)=> {
          return <UserOutput
          key={person.id} 
          click={deleteHandler} 
          userName={person.userName} 
          age={person.age} 
          style={style}
          index={index}
          />
      
        })}
        {/* <UserOutput userName={state.persons[0].userName} style={style} />
        <UserOutput userName={state.persons[1].userName} style={style} change={onChangeHanlder} age={state.persons.age}/>
        <UserOutput userName={state.persons[2].userName} style={style} /> */}
      </div>
  }
  
  return (
    <div className="App">
      <div>
        <h1>React Course Project</h1>
        <button onClick={toggleHandler}>Toggle</button>
        <UserInput style={style} change={onChangeHanlder} />
        <SchoolData school={schoolState} style={style}/>
        {content}
      </div>
    </div>
  );
}

export default App;
