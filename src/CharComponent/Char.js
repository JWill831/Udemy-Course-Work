import React from 'react'

const Char = (props) => {
   const styles={
      display:'inline-block',
      padding: '16px',
      margin: '16px',
      border: '1px solid black',
      textAlign: 'center',
   };
   return (
      <div style={styles} onClick={props.clicked}>
         <p>Click me!</p>{props.character}
      </div>
   )
}

export default Char
