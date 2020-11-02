import React, { useState } from 'react';
import Validation from "./ValidationComponent/Validation";
import Char from './CharComponent/Char';
import './App.css';

function App() {


  const [state, setState] = useState({
    userInput: ''
  });

  const inputChangedHandler = (event) => {
    setState({ userInput: event.target.value });
    console.log(state);
  };
  const outPutStyle = {
    display: 'inline-block',
    backgroundColor: 'gray',
    border: '1px solid black',
  };
  const deleteCharHanlder = (index) => {
    const text = state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    setState({ userInput: updatedText });
  };
  console.log(state)
  
  const validationStyle={
    display:'inline-block'
  }

  let char = null;
  if (state) {
    char =
      <div>
        { state.userInput.split('').map((el, index) => {
          return <Char character={ el } key={ index } clicked={ () => deleteCharHanlder(index) } />;
        }) }
      </div>;
  }
  console.log(char)
  const instructions = {
    backgroundColor: 'gray',
    border: '1px solid black',
    padding: '8px',
    width: '100%',
    textAlign: 'left'

  };

  const conStyles=[];
  if(state.userInput.length<=2){
    conStyles.push('red');
  }
  if(state.userInput.length>2){
    conStyles.push('green');
  }
  if(state.userInput.length>5){
    conStyles.push('bold');
  }
  console.log(conStyles)
  return (
    <div className="App">
      {/* <div style={ instructions }>
        <h1>Instructioins</h1>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the entered text below it (e.g. in a paragraph)</li>
          <li>Create a new component (=> Validation Component) which recieves the text length as a prop.</li>
          <li>Inside the ValidaitonComponent, either output "Text is too short" or "Text is too long" depending on the text length (min = 5).</li>
          <li>Create another component(=> CharComponent) and style is as an inline box(=> display:inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponent where weach CharComponent recieves a different letter of the enterd text (in the intial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed fromt he entered text.</li>
        </ol></div> */}
      <hr />
      <h1 className="title">Test Area</h1>
      <div>
        <input type="text" onChange={ inputChangedHandler } value={ state.userInput } />
        <h3>State(Conditionally rendered):</h3><p className={conStyles.join(' ')}>{ state.userInput }</p>
        
        <h3>Front end validation:</h3> <Validation style={validationStyle} inputLength={ state.userInput.length } />
      
        <h3>Character field</h3>
        {char}
        <h3>Conditional styling</h3>
        <p className={conStyles.join(' ')}>This text changes based on number of character elements!</p>
      </div>

    </div>
  );
}

export default App;
