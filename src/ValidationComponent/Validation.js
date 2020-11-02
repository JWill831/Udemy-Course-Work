import React from 'react';

const Validation = (props) => {
   let validationMessage = <p>Please enter text!</p>;

   if(props.inputLength>=5){validationMessage = <p>Text is long enough!!</p>
   }else if(props.inputLength>0){validationMessage = <p>Text is too short!!</p>}

   return (
      <div>
         {validationMessage}
      </div>
   );
};

export default Validation;
